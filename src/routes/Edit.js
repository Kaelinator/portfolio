import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Edit extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
  }

  state = {
    signedIn: false,
  }

  constructor(props) {
    super(props);

    const { firebase } = this.props;

    firebase.auth().onAuthStateChanged(user => this.setState({ signedIn: !!user }));

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.createArticle = this.createArticle.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  signIn(event) {
    event.preventDefault();
    const { firebase } = this.props;

    const email = event.target[0].value;
    const password = event.target[1].value;

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.log('Sign in error!', err));
  }

  signOut() {
    const { firebase } = this.props;

    firebase.auth().signOut()
      .then(() => this.setState({ signedIn: false }))
      .catch(err => console.err('Sign out error!', err));
  }

  createArticle() {
    const { firebase } = this.props;
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });
    firestore.collection('articles')
      .add({
        title: 'My Second Article',
        subtitle: 'This is my second article!',
        tags: [
          'code',
        ],
      })
      .then((docRef) => { console.log('Created doc!', docRef); })
      .catch((err) => { console.log('Error adding document!', err.code); });
  }

  uploadFile(event) {
    event.preventDefault();

    const file = event.target[0].files[0];
    if (!file) return;

    const { firebase } = this.props;

    const storageRef = firebase
      .storage()
      .ref()
      .child('article1')
      .child(file.name);

    storageRef.put(file)
      .then(snapshot => console.log('Successfully uploaded!', snapshot))
      .catch(err => console.log('Error uploading!', err.code));
  }

  render() {
    const { signedIn } = this.state;
    return (
      <>
        <form onSubmit={this.signIn}>
          <label htmlFor="email">
            <span>Email:</span>
            <input type="text" id="email" />
          </label>

          <label htmlFor="password">
            <span>Password:</span>
            <input type="password" id="password" />
          </label>

          <input type="submit" value="Sign in" />
        </form>

        <button type="button" onClick={this.signOut}>Sign out</button>
        <button type="button" onClick={this.createArticle}>New article</button>

        <form onSubmit={this.uploadFile}>
          <input type="file" />
          <input type="submit" value="Upload File" />
        </form>
        { signedIn && <h1>Hello!</h1> }
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-5e3de.appspot.com/o/article1%2F1-10-00.PNG?alt=media&token=0fc2d487-7007-4996-9f4e-44e3047cc8ee" alt="Judy hopps" />
      </>
    );
  }
}
