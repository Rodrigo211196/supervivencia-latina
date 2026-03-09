import { useState } from "react";
import { CATEGORIAS } from "../data/categorias";

export default function PantallaCategoria({ onSelect }) {
    const [hover, setHover] = useState(null);

    return (
        <div className="cat-wrap">
            {/* Logo */}
            <div className="cat-header">
                <span className="logo-icon">🎭</span>
                <div>
                    <div className="logo-title">supervivencia</div>
                    <div className="logo-sub">social latina</div>
                </div>
            </div>
            <p className="cat-subtitulo">
                Si puedes sobrevivir aquí, puedes sobrevivir en cualquier lugar
            </p>

            {/* Grid de categorías */}
            <div className="cat-grid">
                {CATEGORIAS.map((cat) => (
                    <button
                        key={cat.id}
                        className="cat-card"
                        style={{
                            "--bg-img": `url(${cat.bgImage})`,
                            borderColor: hover === cat.id ? cat.color : "rgba(255,255,255,0.1)",
                            boxShadow: hover === cat.id ? `0 0 24px ${cat.color}55` : "none",
                            transform: hover === cat.id ? "scale(1.04)" : "scale(1)",
                        }}
                        onMouseEnter={() => setHover(cat.id)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => onSelect(cat)}
                    >
                        <div className="cat-card-overlay" />
                        <div className="cat-card-content">
                            <div className="cat-nombre" style={{ color: cat.color }}>
                                {cat.nombre}
                            </div>
                            <div className="cat-desc">{cat.desc}</div>
                            <div
                                className="cat-tag"
                                style={{ background: cat.color + "22", color: cat.color }}
                            >
                                5 situaciones
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
