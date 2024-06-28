import { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"


export const DicaDoDia = () => {
    const [item, setItem] = useState();

    const images = [
    {
        id: 1,
        uri: "https://img.myloview.com.br/fotomurais/lampada-de-ideia-700-153104281.jpg",
        descricao: "Vá atrás de praticar suas ideias",
        dica: "Proatividade"
    },
    
    {
        id: 2,
        uri: "https://super.abril.com.br/wp-content/uploads/2018/06/dc3a1-pra-morrer-de-tanto-beber-c3a1gua.png?w=1024&resize=1200,800",
        descricao: "Hidrate-se! É importante além de estudar cuidar de seu corpo.",
        dica: "Cuide do corpo!"
    },
    
    {
        id: 3,
        uri: "https://tudoparahomens.com.br/wp-content/uploads/2016/10/descansando-sofa.jpg",
        descricao: "Descanse após um longo período de foco nos estudos! Dessa forma o cerébro consegue de maneira mais eficiente gravar o que foi visto.",
        dica: "O descanso é importante!"
    }
    ]

    const getItem = () => {
        const randomItem = Math.floor(Math.random() * images.length);
        return images[randomItem]
    }

    useEffect(() => {
        const loadedItem = getItem();
        setItem(loadedItem)
    }, [])

    return (
        <View style={styles.container}>
            {item && (
            <View style={styles.content}>
                <Text>
                    Dica de estudo do dia: {item.dica}
                </Text>
                <Image source={{ uri: item.uri}} style={styles.image} />
                <Text>
                    Descrição: {item.descricao} 
                </Text>
            </View>
            )}
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },

    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20

    },

    image: {
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        height: 200,
    }
})