import css from "./Statistic.module.css";

export default function Statistic({label, percentage}) {
    return (
        <>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
        </>
    );
}