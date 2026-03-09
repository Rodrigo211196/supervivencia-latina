import { NIVELES } from "../data/categorias";

export default function PantallaResultado({ puntos, categoria, onReintentar, onMenu }) {
    const nivel = NIVELES.find((n) => puntos >= n.min && puntos <= n.max) || NIVELES[0];

    return (
        <div className="root">
            <div className="bg-dots" />
            <div className="end-card">
                <div className="end-emoji">🏆</div>
                <h2 className="end-title">¡Juego Terminado!</h2>
                <div className="end-categoria" style={{ color: categoria.color }}>
                    {categoria.emoji} {categoria.nombre}
                </div>
                <div className="end-puntos">{puntos.toLocaleString()}</div>
                <div className="end-nivel" style={{ color: nivel.color }}>
                    {nivel.label}
                </div>
                <p className="end-msg">
                    {puntos >= 3000
                        ? "Maestro 🎭"
                        : puntos >= 1500
                            ? "¡Nada mal, tienes futuro! 🥈"
                            : "Necesitas practicar más tus sobrevivencias 😅"}
                </p>

                <div className="cta-box">
                    <p className="cta-text">
                        ¿Te gustó?<br />
                        Estamos lanzando la versión app oficial.
                    </p>
                    <button
                        className="btn-whatsapp"
                        onClick={() => window.open("https://chat.whatsapp.com/F63gHuYmkSD6ULc37T5xap?mode=gi_t", "_blank")}
                    >
                        👉 Únete al grupo VIP de WhatsApp
                    </button>
                </div>
                <div className="end-buttons">
                    <button
                        className="btn-reinicio"
                        style={{ background: `linear-gradient(135deg, ${categoria.color}, #ff922b)` }}
                        onClick={onReintentar}
                    >
                        🔄 Intentar de nuevo
                    </button>
                    <button
                        className="btn-reinicio btn-reinicio--secondary"
                        onClick={onMenu}
                    >
                        🏠 Cambiar categoría
                    </button>

                </div>
            </div>
        </div>
    );
}
