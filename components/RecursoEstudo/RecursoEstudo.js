import { View, Image, Text, StyleSheet } from "react-native"

export const RecursoEstudo = () => {
    const recursos = [
        {
            icone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_VEnnixbN40VB8cxJ7fDQEO44Tyw-ZZ_EQ&usqp=CAU",
            nome:"Pomodoro"
        },

        {
            icone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRjsuCr55ReQLQ2hr4oU0k6301rLKSij6lA&usqp=CAU",
            nome: "Caderno"
        },
    
        {
            icone: "https://cdn-icons-png.flaticon.com/512/4703/4703487.png",
            nome: "Computador"
        },

        {
            icone: "https://cdn-icons-png.flaticon.com/512/6919/6919491.png",
            nome: "Mesa digitalizadora"
        },
    ]

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: recursos[0].icone}} style={styles.image} />
                <Text>
                    {recursos[0].nome}
                </Text>
            </View>

            <View>
                <Image source={{ uri: recursos[1].icone}} style={styles.image} />
                <Text>
                    {recursos[1].nome}
                </Text>
            </View>

            <View>
                <Image source={{ uri: recursos[2].icone}} style={styles.image} />
                <Text>
                    {recursos[2].nome}
                </Text>
            </View>

            <View>
                <Image source={{ uri: recursos[3].icone}} style={styles.desk} />
                <Text>
                    {recursos[3].nome}
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },

    image: {
        width: 80,
        height: 80,
        left: 10
    },

    desk: {
        width: 80,
        height: 80,
        left: 30
    }
})