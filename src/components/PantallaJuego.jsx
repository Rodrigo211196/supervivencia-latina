import { useState } from "react";
import { NIVELES } from "../data/categorias";

export default function PantallaJuego({ categoria, onVolver, onGameOver }) {
    const [puntos, setPuntos] = useState(1500);
    const [indice, setIndice] = useState(0);
    const [seleccionada, setSeleccionada] = useState(null);
    const [animPuntos, setAnimPuntos] = useState(null);
    const [shake, setShake] = useState(false);
    const [celebrate, setCelebrate] = useState(false);

    const situacion = categoria.situaciones[indice];
    const nivel = NIVELES.find((n) => puntos >= n.min && puntos <= n.max) || NIVELES[0];

    const handleOpcion = (opcion) => {
        if (seleccionada) return;
        setSeleccionada(opcion);
        setPuntos((p) => Math.max(0, p + opcion.puntos));
        setAnimPuntos(opcion.puntos);
        if (opcion.correcta) {
            setCelebrate(true);
            setTimeout(() => setCelebrate(false), 1500);
        } else {
            setShake(true);
            setTimeout(() => setShake(false), 600);
        }
        setTimeout(() => setAnimPuntos(null), 1200);
    };

    const siguiente = () => {
        if (indice + 1 >= categoria.situaciones.length) {
            onGameOver(puntos);
        } else {
            setIndice((i) => i + 1);
            setSeleccionada(null);
        }
    };

    return (
        <div className="root">
            <div className="bg-dots" />

            {/* Confetti */}
            {celebrate && (
                <div className="confetti-wrap">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="confetti-piece"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 0.5}s`,
                                background: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff922b"][i % 5],
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Header */}
            <header className="header">
                <div className="logo">
                    <span className="logo-icon">🎭</span>
                    <div>
                        <div className="logo-title">Supervivencia</div>
                        <div className="logo-sub">Social latina</div>
                    </div>
                </div>
                <div className="puntos-wrap">
                    <div className="puntos-label">puntos</div>
                    <div className="puntos-num" style={{ color: nivel.color }}>
                        {puntos.toLocaleString()}
                    </div>
                    {animPuntos && (
                        <div
                            className="anim-puntos"
                            style={{ color: animPuntos > 0 ? "#6bcb77" : "#ff6b6b" }}
                        >
                            {animPuntos > 0 ? `+${animPuntos}` : animPuntos}
                        </div>
                    )}
                </div>

                <button className="btn-volver" onClick={onVolver}>
                    ← Menú
                </button>
            </header>

            {/* Categoría badge */}
            <div className="nivel-badge" style={{ background: categoria.color }}>
                {categoria.emoji} {categoria.nombre}
            </div>

            {/* Card */}
            <div className={`card${shake ? " shake-anim" : ""}`}>
                <div className="situacion-label">
                    <span className="situacion-dot" />
                    SITUACIÓN ACTUAL
                    <span className="situacion-dot" />
                </div>

                <div className="gif-container">
                    <img
                        src={situacion.gif || situacion.imagen}
                        alt={situacion.gifAlt || situacion.imagenAlt}
                        className="gif"
                        onError={(e) => {
                            e.target.src = "https://placehold.co/600x400/png?text=Error+Loading";
                        }}
                    />
                    <div className="gif-overlay">{situacion.emoji}</div>
                </div>

                <div className="situacion-texto">&ldquo;{situacion.situacion}&rdquo;</div>

                <div className="opciones">
                    {situacion.opciones.map((op, i) => {
                        const isSelected = seleccionada === op;
                        const revealed = !!seleccionada;
                        let bgColor = "rgba(255,255,255,0.06)";
                        let border = "1.5px solid rgba(255,255,255,0.12)";
                        let textColor = "#fff";

                        if (revealed) {
                            if (op.correcta) {
                                bgColor = "linear-gradient(135deg, #6bcb77, #4CAF50)";
                                border = "2px solid #4CAF50";
                            } else if (isSelected) {
                                bgColor = "linear-gradient(135deg, #ff6b6b, #e53e3e)";
                                border = "2px solid #e53e3e";
                            } else {
                                bgColor = "rgba(255,255,255,0.03)";
                                textColor = "#555";
                            }
                        }

                        return (
                            <button
                                key={i}
                                className="opcion"
                                style={{
                                    background: bgColor,
                                    border,
                                    color: textColor,
                                    opacity: revealed && !op.correcta && !isSelected ? 0.5 : 1,
                                    transform: isSelected && revealed ? "scale(1.03)" : "scale(1)",
                                    cursor: revealed ? "default" : "pointer",
                                }}
                                onClick={() => handleOpcion(op)}
                            >
                                <span className="opcion-letra">{["A", "B", "C"][i]}</span>
                                <span className="opcion-texto">{op.texto}</span>
                                {revealed && op.correcta && <span className="checkmark">✓</span>}
                                {revealed && isSelected && !op.correcta && <span className="checkmark">✗</span>}
                            </button>
                        );
                    })}
                </div>

                {/* Reacción */}
                {seleccionada && (
                    <div
                        className="reaccion"
                        style={{
                            background: seleccionada.correcta
                                ? "rgba(107,203,119,0.15)"
                                : "rgba(255,107,107,0.15)",
                            borderColor: seleccionada.correcta ? "#6bcb77" : "#ff6b6b",
                        }}
                    >
                        <div className="reaccion-text">
                            {seleccionada.correcta ? situacion.reaccion : seleccionada.mensajeError}
                        </div>
                        <div className="reaccion-sub">
                            Respuesta ideal: <strong>&ldquo;{situacion.respuestaIdeal}&rdquo;</strong>
                        </div>
                    </div>
                )}
            </div>

            {/* Botón siguiente */}
            {seleccionada && (
                <button
                    className="btn-siguiente"
                    style={{ background: `linear-gradient(135deg, ${categoria.color}, #ff922b)` }}
                    onClick={siguiente}
                >
                    {indice + 1 >= categoria.situaciones.length
                        ? "Ver resultado 🏆"
                        : "Siguiente situación →"}
                </button>
            )}

            {/* Barra de progreso */}
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${((indice + (seleccionada ? 1 : 0)) / categoria.situaciones.length) * 100}%`,
                        background: `linear-gradient(90deg, ${categoria.color}, #ffd93d)`,
                    }}
                />
            </div>
        </div>
    );
}
