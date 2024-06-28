import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native"

export const PerfilAluno = () => {
    const [imagem , setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [escola, setEscola] = useState("");
    const [anoLetivo, setAnoLetivo] = useState("");
    const [aluno, setAluno] = useState({});
    const [editarPerfil, setEditarPerfil] = useState(false);

    const data = {
        imagem: imagem,
        nome: nome,
        escola: escola,
        anoLetivo: anoLetivo
    }

    const handleStoreData = async() => {
        
        try {
            await AsyncStorage.setItem("aluno", JSON.stringify(data));
            setAluno(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleRetriveData = async() => {
        try {
            const user = await AsyncStorage.getItem("aluno");
            if(user) {
                const parsedUser = JSON.parse(user)
                setAluno(parsedUser)
            }
            
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleLogoff = async() => {
        setAluno({})
        await AsyncStorage.clear();
    }

    const handleEditProfile = () => {
        setEditarPerfil(!editarPerfil);
    }

    useEffect(() => {
        handleRetriveData()
    },[])
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 30
        },
        profile: {
            flex: 1
        },
        data: {
            flex: 1
        },
        form: {
            flex: 2
        },
        buttons: {
            marginTop: 20
        },
        image: {
            width: 130,
            height: 130
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
            <Text>
                Perfil do Aluno
            </Text>
             <Image source={{ uri: aluno.imagem}} style={styles.image} />
            </View>
            <View style={styles.data}>
                <Text>
                    Nome: {aluno.nome}
                </Text>

                <Text>
                    Escola: {aluno.escola}
                </Text>

                <Text>
                    Ano Letivo: {aluno.anoLetivo}
                </Text>
            {
                aluno ? (
                    <TouchableOpacity onPress={handleEditProfile}>
                        <Text>
                            Editar perfil
                        </Text>
                    </TouchableOpacity>

                ): null
            } 
            </View>

           
            {(editarPerfil || !aluno) ? (
                <View style={styles.form}>
                <TextInput placeholder="Digite a url da imagem do perfil" onChangeText={(text) => setImagem(text)} />
                <TextInput placeholder="Digite o nome do aluno" onChangeText={(text) => setNome(text)}  />
                <TextInput placeholder="Digite o nome da escola" onChangeText={(text) => setEscola(text)} />
                <TextInput placeholder="Digite o ano letivo" onChangeText={(text) => setAnoLetivo(text)} />
                <View style={styles.buttons}>
                <TouchableOpacity onPress={handleStoreData}>
                    <Text>
                        Salvar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogoff}>
                    <Text>
                        Deslogar
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
                ): null}
        </View>
        )
}