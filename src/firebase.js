import * as firebase from 'firebase'

import ApiKeys from "./keys"

firebase.initializeApp(ApiKeys.config)
const databaseRef = firebase.database().ref()
export const todoAppRef = databaseRef.child("todoApp")
