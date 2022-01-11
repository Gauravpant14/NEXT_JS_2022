import User from "../components/user"

const UserList = ({users}) => {
    return (
        <div>
            <h1>List of Users</h1> 
            {users.map((e) => {
                return(
                    <div key={e.id}>
                        <User user={e}/>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()

    console.log(data);
    return {
        props: {
            users: data,
        }
    }
}