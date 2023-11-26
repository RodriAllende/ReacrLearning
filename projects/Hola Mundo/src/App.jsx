import "../src/index.css"
export function App() {


return (
    <article className="tw-followCard">

        <header className="tw-followCard-header">
            <img  className="tw-followCard-avatar" src="/src/assets/imagen/IMAGEN PERFIL.jpg" alt="foto rodri" />

            <div className="tw-followCard-info">
                <strong>Rodrigo Allende</strong>
                <span className="tw-followCard-infoUserName" >@rodriAllende</span>

            </div>
        </header>
        <aside>
            <button className="tw-followCard-button" >
                Seguir
            </button>
        </aside>


    </article> 
)
}