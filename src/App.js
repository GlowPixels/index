import React from "react"
import Header from "./Components/Header"
import Users from "./Components/Users"
import AddUser from "./Components/AddUser"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
 users: [
    {
        id: 1,
        firstname: 'Mikhail',
        lastname: 'Lermontov',
        age: 23,
        bio: 'October 3, 1814 — July 15, 1841) was a poet.',
        isHappy: true
    },
    {
        id: 2,
        firstname: 'Anna',
        lastname: 'Ahmatova',
        age: 40,
        bio: 'Russian poet of the 20th century.',
        isHappy: false
    }
  ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
 

  render() {
    return (<div>
      <Header title="Список пользователей" />
      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>
    </div>)
  }

    deleteUser(id) {
        this.setState({
          users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user) {
      let allUsers = this.state.users
      allUsers[user.id - 1] = user

      this.setState({users: [] }, () => {
        this.setState({users: [...allUsers]})
      })

    }

    addUser(user) {
      const id = this.state.users.length + 1
      this.setState({ users: [...this.state.users, {id, ...user}] })
    }

}

export default App