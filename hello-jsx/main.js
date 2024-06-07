const rootElement = document.getElementById('root')

// const element = React.createElement('div', { className: 'container' }, 'Hello, world!')
// const person = { 
//   first: 'Joe',
//   last: 'eoJ'
// }
// const element = <div className='container'>Hello, {person.first} {person.last}!</div>

// const element = <img src="./react-logo.png" />

const logo = {
  name: 'React Logo',
  title: 'React Logo',
  path: './react-logo.png'
}

// const element = <img src={logo.path} alt={logo.name} title={logo.title} />

// const element = <div className='alert alert-danger'>error message</div>

const element = (
   <form>
    <label forName='name'>Name</label>
    <input id='name' />
  </form>
)

ReactDOM.createRoot(rootElement).render(element)