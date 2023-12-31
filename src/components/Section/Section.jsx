import css from "./Section.module.css";

export default function Section({title, children}) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    );
}