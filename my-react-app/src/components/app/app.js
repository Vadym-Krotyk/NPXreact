import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employees-list/employees-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {

    const data = [
        {name: 'Nick L.', salary: 800, increase: false, id:1},
        {name: 'Milton K.', salary: 3000, increase: true, id:2},
        {name: 'Jack O.', salary: 14000, increase: false, id:3},
    ];
    return (
        <div className="app">
             <AppInfo/>

            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>

            <EmployersList data={data}/>, 
            <EmployersAddForm/>
           
        </div> 
    );
}

export default App;