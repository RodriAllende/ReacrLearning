import "../src/app.css"
import "../src/index.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"


export function App() {
    return (
        <div className="App">
            <TwitterFollowCard
                userName="midudev">
                Miguel Angel Duran {/*hola soy un comentario*/}
            </TwitterFollowCard>


            <TwitterFollowCard
                userName="jmilei"
                Name="Javier Milei">
                Javier Milei
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="madorni"
                Name="Mariano Adorni">
                Mariano Ardoni
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="cristiancim"
                Name="Cristian Cimmi" >
                Cristian Cimi
            </TwitterFollowCard>

        </div>



    )


}