import PropTypes from "prop-types";
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
    return (
        <ul className={s.friendlist}>
            {friends.map(({id,avatar,name,isOnline}) => (
                <li key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired
        })
    )
}
export default FriendList