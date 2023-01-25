import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}
export const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setBgColor] = useState<String>('grey')

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: 'grey' }).then(
            colors => {
                if (colors.platform === 'android') {
                    setBgColor(colors.dominant || 'grey')
                } else if (colors.platform === 'ios') {
                    setBgColor(colors.background || 'grey')
                }
            }
        )
    }, [])

    return (
        <TouchableOpacity activeOpacity={0.1}>
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: `${bgColor}`
                }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}
