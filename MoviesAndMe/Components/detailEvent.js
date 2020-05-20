// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView,Button } from 'react-native'
import {  getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

_displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    
}

  componentDidMount() {
    getFilmDetailFromApi(this.film.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFilm() {
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>{this.state.film.title}</Text>
          {/* Pour l'instant je n'affiche que le titre, je vous laisserais le soin de créer la vue. Après tout vous êtes aussi là pour ça non ? :)*/}
        </ScrollView>
      )
    }
  }

  render() {
   
    const idFilm = this.props.navigation.state.params.idFilm
     console.log(idFilm );
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  }
})

export default FilmDetail