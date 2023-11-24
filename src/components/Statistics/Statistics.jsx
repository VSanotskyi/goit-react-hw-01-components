import Statistic from "./Statistic/Statistic";
import css from "./Statistics.module.css";

export default function Statistics({statistics}) {
    return (
        <ul className={css.statList}>
            {statistics.map(({id, label, percentage}) => (
                <li className={css.item}
                    key={id}
                >
                    <Statistic
                        label={label}
                        percentage={percentage}
                    />
                </li>
            ))}
        </ul>
    );
}