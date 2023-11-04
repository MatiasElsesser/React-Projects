import { useEffect, useState } from 'react'
import './App.css'
const initialState = [{
  "gender": "male",
  "name": {
  "title": "Mr",
  "first": "Hector",
  "last": "Stephens"
  },
  "location": {
  "street": {
  "number": 4259,
  "name": "W Belt Line Rd"
  },
  "city": "Tweed",
  "state": "Victoria",
  "country": "Australia",
  "postcode": 6242,
  "coordinates": {
  "latitude": "-82.8368",
  "longitude": "-48.6745"
  },
  "timezone": {
  "offset": "+9:30",
  "description": "Adelaide, Darwin"
  }
  },
  "email": "hector.stephens@example.com",
  "login": {
  "uuid": "6de6dedd-7f0d-42d8-925f-822538c4da0f",
  "username": "greenwolf594",
  "password": "bluedog",
  "salt": "C8aZjZHu",
  "md5": "b00c518547a3d94af74f7fa14bcfe899",
  "sha1": "888d44de5e82ba4057b0a977b8693b14f62bc66c",
  "sha256": "b4726c60456421bf36900d6a430329f8244d61c0763c086ad27805dd650d470a"
  },
  "dob": {
  "date": "1954-08-14T02:01:19.896Z",
  "age": 69
  },
  "registered": {
  "date": "2005-10-27T17:57:11.496Z",
  "age": 18
  },
  "phone": "01-5738-6095",
  "cell": "0421-763-529",
  "id": {
  "name": "TFN",
  "value": "514714407"
  },
  "picture": {
  "large": "https://randomuser.me/api/portraits/men/32.jpg",
  "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
  },
  "nat": "AU"
  },
  {
  "gender": "female",
  "name": {
  "title": "Ms",
  "first": "Gladys",
  "last": "Palmer"
  },
  "location": {
  "street": {
  "number": 7200,
  "name": "Robinson Rd"
  },
  "city": "Bathurst",
  "state": "Western Australia",
  "country": "Australia",
  "postcode": 3159,
  "coordinates": {
  "latitude": "16.6851",
  "longitude": "-80.4619"
  },
  "timezone": {
  "offset": "+6:00",
  "description": "Almaty, Dhaka, Colombo"
  }
  },
  "email": "gladys.palmer@example.com",
  "login": {
  "uuid": "2ca693f8-27b2-4771-b90b-5afcbb2fbdfc",
  "username": "blacktiger210",
  "password": "trigger",
  "salt": "29VuFELH",
  "md5": "ca26a7d3a596b307ec427f9bbe879e57",
  "sha1": "15fb7827524b77239159ca41adea5fa50ff3fd89",
  "sha256": "165f5f84c7ea801b6272b7157b4720b13595d81445a0a028a1a2682eb3ee0b2e"
  },
  "dob": {
  "date": "1968-05-20T04:34:29.409Z",
  "age": 55
  },
  "registered": {
  "date": "2017-02-22T18:22:50.953Z",
  "age": 6
  },
  "phone": "06-3656-5289",
  "cell": "0483-751-173",
  "id": {
  "name": "TFN",
  "value": "160637661"
  },
  "picture": {
  "large": "https://randomuser.me/api/portraits/women/4.jpg",
  "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
  },
  "nat": "AU"
  },
  {
  "gender": "male",
  "name": {
  "title": "Mr",
  "first": "Aleksa",
  "last": "Preković"
  },
  "location": {
  "street": {
  "number": 115,
  "name": "Mijatovih Njiva"
  },
  "city": "Malo Crniće",
  "state": "West Bačka",
  "country": "Serbia",
  "postcode": 64686,
  "coordinates": {
  "latitude": "-31.7192",
  "longitude": "3.5600"
  },
  "timezone": {
  "offset": "+2:00",
  "description": "Kaliningrad, South Africa"
  }
  },
  "email": "aleksa.prekovic@example.com",
  "login": {
  "uuid": "798e2e16-b0a4-499a-84de-c5c922b51a09",
  "username": "angrygoose854",
  "password": "sherman",
  "salt": "tWslSK8t",
  "md5": "b54eeb1ad72a2811c0eaf20fd6f303a1",
  "sha1": "ab7adc7c9de81fe697ba2d5d131558182d586ebe",
  "sha256": "98d99b9ec475d499bb13d661fc0361a78be19e86a3808d40da59ec84764e3003"
  },
  "dob": {
  "date": "1974-11-26T03:01:24.978Z",
  "age": 48
  },
  "registered": {
  "date": "2013-05-12T07:36:43.028Z",
  "age": 10
  },
  "phone": "016-2970-500",
  "cell": "062-7078-020",
  "id": {
  "name": "SID",
  "value": "420816787"
  },
  "picture": {
  "large": "https://randomuser.me/api/portraits/men/71.jpg",
  "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
  },
  "nat": "RS"
  }
]
const END_POINT = 'https://randomuser.me/api/?results=100'

function App() {
  const [users, setUsers] = useState(initialState)

  useEffect(() => {
    fetch(END_POINT)
      .then(data => data.json())
      .then(res => setUsers(res.results))
      .catch(err => {
        console.error(err)
      })
  },[])

  return (
    <>
    <h1> List of users </h1>
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Last name</th>
          <th>Country</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user) => {
            return (
              <tr>
                <th>
                  <img src={user.picture.thumbnail} />
                </th>
                <th>{user.name.first}</th>
                <th>{user.name.last}</th>
                <th>{user.location.country}</th>
                <th>
                  <button>Delete</button>
                </th>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </> 
  )
}

export default App
