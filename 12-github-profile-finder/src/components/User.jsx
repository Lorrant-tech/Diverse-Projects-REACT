export default function User({user}) {
    const {avatar_url, followers, following, public_repos, name, login, created_at} = user

    const createdDate = new Date(created_at);
    
    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="user" />
            </div>
            <div className="name-container">
                <a target="_blank"  href={`https://github.com/${login}`}>{name || login}</a>
                <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {month: 'short'})} ${createdDate.getFullYear()}`}</p>
            </div>

            <div className="profile-info">
                <div className="info-card">
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>

                <div className="info-card">
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>

                <div className="info-card">
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    )
}