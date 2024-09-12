window.onload = () => {
    renderSoldiers()
}

const soldiers = JSON.parse(localStorage.getItem('soldiers')) || [];

const addSoldier = () => {
    const name = document.querySelector('#name').value;
    const rank = document.querySelector('#rank').value;
    const position = document.querySelector('#position').value;
    const platoon = document.querySelector('#platoon').value;
    const missionTime = document.querySelector('#missionTime').value;
    const status = document.querySelector('#status').value;

    if (name === '' || rank === '' || position === '' || platoon === '' || missionTime === '' || status === '')
    {
        alert('נא מלא את כל השדות');
        return;
    }

    soldiers.push({ name, rank, position, platoon, missionTime, status });

    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    
    document.getElementById('name').value = '';
    document.querySelector('#rank').value = '';
    document.querySelector('#position').value = '';
    document.querySelector('#platoon').value = '';
    document.querySelector('#missionTime').value = '';
    document.querySelector('#status').value = '';
    renderSoldiers();
}

const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', addSoldier);


const renderSoldiers = (order = soldiers) => {
    const soldierslist = document.querySelector('#soldierslist');

    soldierslist.textContent = ''

    order.forEach((soldier, index) => {
        const tr = document.createElement('tr');

        const tdAction = document.createElement('td');
        tdAction.id = 'actionTd';
        tdAction.classList.add('tdis');
        
        const tdStatus = document.createElement('td');
        tdStatus.textContent = soldier.status;
        tdStatus.classList.add('tdis');

        const tdPltoon = document.createElement('td');
        tdPltoon.textContent = soldier.platoon;
        tdPltoon.classList.add('tdis');

        const tdPosition = document.createElement('td');
        tdPosition.textContent = soldier.position;
        tdPosition.classList.add('tdis');

        const tdRank = document.createElement('td');
        tdRank.textContent = soldier.rank;
        tdRank.classList.add('tdis');

        const tdName = document.createElement('td'); 
        tdName.textContent = soldier.name;
        tdName.classList.add('tdis');

        const removButton = document.createElement('button');
        removButton.textContent = 'remove';
        removButton.id ='remove';
        removButton.classList.add('removButton');
        removButton.addEventListener('click', () => removeSoldier(index));

        const missionButton = document.createElement('button');
        missionButton.textContent = 'mission';
        missionButton.id = 'mission';
        missionButton.addEventListener('click', () => missionSoldier(index));

        const editButton = document.createElement('button');
        editButton.textContent = 'edit';
        editButton.id = 'edit';
        editButton.classList.add('editButton');
        editButton.addEventListener('click', () => editSoldier(index));


        tdAction.appendChild(removButton);
        tdAction.appendChild(missionButton);
        tdAction.appendChild(editButton);

        tr.appendChild(tdAction);
        tr.appendChild(tdStatus);
        tr.appendChild(tdPltoon);
        tr.appendChild(tdPosition);
        tr.appendChild(tdRank);
        tr.appendChild(tdName);
        
        soldierslist.appendChild(tr)
    })
}






const removeSoldier = (index) => {
    soldiers.splice(index, 1);
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    renderSoldiers();
}


const missionSoldier = (index) => {
    const stat = soldiers[index].status;
    if (stat === 'Active' || stat === 'Reserve')
        
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    renderSoldiers();
}

const orderBy = document.querySelector('#filter');

orderBy.addEventListener('click', () => {
    const orser = [];
    if (soldiers.fullName.localeCompare(b.fullName))
    {
        order = soldiers.sort((a, b) => a.fullName.localeCompare(b.fullName));
    }
    else if (!soldiers.fullName.localeCompare(b.fullName))
    {
        order = soldiers.sort((a, b) => b.fullName.localeCompare(a.fullName));
    }
    renderTasks(order);
})



let countdown = 10;
const timer = document.querySelector('#mission');

timer.addEventListener('click', setInterval(() => {
    if (countdown >= 0) {
        timer.textContent = countdown;
        countdown--;
    } else {
        clearInterval(timer);
        timer.textContent = 'Time\'s up!';
    }
}, 1000));

const edit = document.querySelector('#edit');

const editSoldier = (index) => {

function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
  }}