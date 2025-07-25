import { useState } from "react";
import { Text,Button,View } from "react-native";

export default function App(){
    const[contador,setContador] = useState(0)
    type Usuario ={
        id:number
        nome:string
        email:string  
    }
    const [Usuario,setUsuario]= useState<Usuario>({
        id:1,
        nome:"João",
        email:'joao@gmail.com'

    })

    function saudacao():void{
        console.log("Olá")
    }

    function somar(a:number,b:number):number {
        return a +b 
    }

    return(
        
        <View className="mt-2 h-5 flex-col gap-2 p-10">
            <Text>Você clicou {contador} vezes</Text>
            <Button title="Clique aqui" onPress={()=>setContador(contador + 1)}/>
            <Button title="Atualizar usuário"  onPress={()=>setUsuario({
                id:2,
                nome:"Ederson",
                email:"costa@email.com"
               })
            }/>
            <Text>{Usuario.id} {Usuario.nome} {Usuario.email}</Text>
        </View>
    );
 
} 