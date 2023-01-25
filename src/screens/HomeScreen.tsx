import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'
import { PokemonCard } from '../components/PokemonCard'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const { simplePokemonList, loadPokemons, isLoading } = usePokemonPaginated()

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View style={{
                // ...styles.globalMargin,
                 alignItems: 'center'
        }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}

                    ListHeaderComponent={(<Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20, marginBottom: top + 20, paddingBottom: 10 }}>Pokedex</Text>)}

                    onEndReached={loadPokemons}
                    // Porcentaje del final de la pagina
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={
                        <ActivityIndicator style={{ height: 100 }} size={20} color={'grey'} />
                    }
                />
            </View>

        </>
    )
}
