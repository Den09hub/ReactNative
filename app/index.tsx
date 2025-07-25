import { useState } from "react";
import { View,Text,Button } from "react-native";
export default function App(){
    function mostrarMensgem(){
        alert("Você clicou no botão!")
    }
    const [contador,setContador] = useState(0)
    function incrementar(){
        setContador(contador + 1)
    }
    function zerar(){
        setContador(0)
    }
    return(
        <View style={{padding:20,gap:4}}>
            <Button title="Clique aqui" onPress={mostrarMensgem}/>
            <Text>Total: {contador}</Text>
            <Button title="Somar 1" onPress={incrementar}/>
            <Button title="Zerar contador" onPress={zerar}/>

        </View>

    );
}