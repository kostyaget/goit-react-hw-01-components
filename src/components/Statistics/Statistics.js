import s from './Statistics.modules.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }){ 
    return(
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            
            <ul className={s.statlist}>
                {stats.map(stat => (
                    <li className={s.item}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}</span>
                    </li>
                ))
}
  </ul>
        </section>
    )
}
Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            L
        })
    )
}