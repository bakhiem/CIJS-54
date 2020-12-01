class User{
  name;
  age;
  gender;
  description;
  image;
  constructor(name, age, gender, description, image) {
    this.name = name
    this.age = age
    this.gender = gender
    this.description = description
    this.image = image
  }
  like() {}
  unlike() {}
  update(name, age, gender, description, image) {
    this.name = name
    this.age = age
    this.gender = gender
    this.description = description
    this.image = image
  }
  toHTML() {
    return `
      <div class="user-container">
        <div class="previous">
          <
        </div>
        <img src="${this.image}" />
        <div class="info">
          ${this.name}
          ${this.age}
          ${this.description}
        </div>
        <div class="next">
          >
        </div>
      </div>
    `
  }
}
class UserCollection{
  listUser;
  current;
  constructor() {
    this.listUser = []
    this.current = 0
  }
  addUser(user) {
    this.listUser.push(user)
  }
  removeUser(index) {
    this.listUser.splice(index, 1)
  }
  show() {
    document.querySelector('#app').innerHTML = this.listUser[this.current].toHTML()
    this.listenUserClick()
  }
  previous() {
    console.log(this.current)
    if (this.current > 0) {
      this.current--
      this.show()
    }
  }
  next() {
    if (this.current < this.listUser.length - 1) {
      this.current++
      this.show()
    }
  }
  listenUserClick() {
    document.querySelector('.previous').addEventListener('click',() => {
      userCollection.previous()
    })
    document.querySelector('.next').addEventListener('click',() => {
      userCollection.next()
    })
  }
}
const userCollection = new UserCollection()
const user1 = new User(
  'Nguyen Y Van',
  18, 
  'Male', 
  'Thich cho meo, thich di duoi mua, yeu mau tim',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiCJPy0nEXPYiid_i7y-zFEvAygMIq00-dw&usqp=CAU')
const user2 = new User(
  'Trump',
  76, 
  'Female', 
  'Thich lam tong thong',
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVEBUVFxAQEBAQEA8QFRAVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODUtNygtLisBCgoKDg0OGhAQGC0dHR0tLS0tLS0tKystLS0rLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vKy0tLS0tLS0tOP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA9EAABBAAEBAQEBQIFAgcAAAABAAIDEQQFBiESMUFxEyJRYQcjgZEyM1KhsRTBQnKC4fAWshUkU2LC0fH/xAAaAQACAwEBAAAAAAAAAAAAAAABBAACAwUG/8QAKREAAgEEAgICAQQDAQAAAAAAAAECAxEhMQQSMkEFMyITI3HBUWGhQv/aAAwDAQACEQMRAD8AxycbJTCnZFkGyLhTunL5KC8gRmlFkXQ1W9gJnTmTumlbVAAgm/Ra7/0pF4YJaDQsWAsr0tmpika2rsgX6LS8bq1jWBpcBewRd/RVmZauLWzFjdq5qBUzqjENkkLm/dQoUZEKNcrDpbKGzSNLuQINBV5rVKZJjHxyN4XUOIX26ooLN9wmURiIbDksl+IreGSmjbeyrXjNbNiiG98hQ5qialzsTix1QjFp3ZVFaRXBca5KAKxcl9KNYZRx1zHNb7lIjEQ5cl5wg2I7hXh2rnMipp3qgqyhcq8CvxKNnynYfiHqqHadZrnEkv4vqmEZtXWMESDudSdZPjmskDnck0ItDw0AnoDSebRGJrgRRCiteYpkkbmh1WOizLLs9dFHwg8hSj5s2lcTbyQd6KqoWdwf6GMsfC4jnXVAIzt0V7SFcIjKUgxllLvSfFSowkjlcdSN7hbvkH5QWDZOSZWdwvQWnox4Q7BUqaIh7GlqRgxB7qCwLCbyoDVDvlO7FSkmJ3UTqN9xHsVDSl5Iw2WMmR3c/wAo79ktixTndz/KZlxKTez06XVBXBW34e7Sn6KsRMVq0O35v2VqfkL8mP7TZrBm2Td0i54aQc5NnnDzy4JCLZycptIKK2YB2W2gVb9F5EZ47IoWRdc0tqbII8NHtt35lXK9im4eQtIPolsRinPNk3XJNl2lEwhi5OsLlz3i2hN8Nhi5wA6rYNB6aaIhxHiPO6Uv/kDZkPguG5aRXUrjZd9lp/xJyxkMZc0e2wWTxndS4E7j+WYu5m0mSuDkuMG9KwR5lmXGV1BPcTp2Zv8AhIb+o9VfPhzksY8x3Lqu1b9VYNghNAbDYIOWbAuefJAWmijh9ouPDjI4kVudvRFiUTYRctsKc0hlHjucKulBROFi+S1/4dmKhw0PXki3i4GVzNdEFvzOQ/T/AHVKx0fA8t9F6E1MWeEarlQXn/M4yJX2bNndSLugDalwBdcVxqsEkckwLpZWtDSRe56Dur7mGjGiAuI83O/RQuhcxjY8NcaJK0zM8zidCaI5Kkm9APPmYMDZHNHTZNXKT1HE1szi3kSSo0bqpdD/ACN1zMHuF6DyAfKHYLAMgYPGZ3C9BZIaiHYKlTRESRKaYh9oTylNd1kWB4ajdRN+SexUu0WonUraiPYoGtLzRjE27ndz/KQdEncg8x7lJFqTZ6tLAVrVY9E/nfZVx5Vh0MLmVoeQvyvqZpsspqkgGlSTcLYCUGHCcPMHmkBJP5pRpRJVsyprfw+zWNsI39RSjPiJK2XcG6silRMDmLmMLWmuaDsY4jhLiR7qysU6jUJRqELC40EaaItNEUVCwI8SWEELTtF6u4YrftX8LLgz1SseIc0cINKfyBo0bVWpY8QwgEO5ilmrm0V1rilWM4iAOZRxYiRxqDjSnsPpHFvAMcD3iruq29RfP6Lj9D5jdf0Ux/yta/8AcGkO8V7LWJDRWoHxcXE7balM5zrlrgWb2Bz6Kvx6FzFov+lkb0PEA3+So3Mcgni/MYWHrYLr9dxt+6ilEq4jfFyB7i71TYNXYmEGuXI8wbF1zVlbpaRzLYLNWr3uS9iruYprTGbmBxNneuqZ5lgHRbO5piwIE2W7OdaSv8o/Cqw/EcZ4jzSdWiCI8Q7hElhUowar5gdHeJECBuRYKgc302+Bp4jZ9uSl0C5X4sTwOBHRSGIzqRwoOI7FQxbulGoXCDFW7cm0g1hToIwCFrkF8gYfHZ3W/ZKfljsFhOR/nM7rc8nYRGPosqqsFEk6K0n4SWa5GaFiWCMiUHq78k9irEVWtZn5LuxUZrR80YzKdz3K5aRfNRN+pSDsSkj1XdJDp1Kw6Gfc6qD5irV8PG/O39leHkK8qd6bNjiGwSlIsXII5cmzzR5gaEWVqVAXHhMWwAQjS1JNnNLAqIhYdHZO+WZpI8vUrQcz0dGB4hbZA2VR0LnrGytjI59ey0jOc/j8Ph4gDWwRu/RmzFc4YBIWt6I+Q5DNi5RHCwu3HE7owH/ERzP0QzNodMeDcuOw9SVr2hcG3BxhoDS9wD5HgVZI9/8AnZZ159EaQjcVyf4WYWNo8bimdzLTw0PbYX9VaMBkeEw35OGijOw4mxt4jXK3VaP/AONAdCemyZz5mDyFn0J3+3+y57m3tjCiPcTmXDz2+hSWHzUE78/VvI91DTY+9iB9QT/CbTzRtHE6QR9w4/YbfyqFrFwZmde/3TbMGYfENLZYyb2sDl72qc3UNGo5A8/q4Cb+4K47OpyfM8Hsxg/cC1ZStoHRkXm+hImScYmEjS6w0tDXAehI58hur1l+XsEWwA2r9lHOwRMJkc4l1E0ST/KrU+tPBYbJNW2k5RlKasL1IpFa+IUPDKABtvZ/sqgWqZzzUIxB7+qiHJ1aM0IA0pzTIjdIOOuY5qBejQuo3dIBZ6XyNjPCHLkqd8R8JcbuCgVXsJrTwohTtwPVQeM1i+cEPFEqkYPtcqVaRtc0VpTnEMuymzW0rtWLCgCNSDQhdIog/wAhb89ndbtlUgEY7LCMjkuZleq3LKYCYwsawYkm14KWYEhHh6SznUFgWA9yrWsn/JPYqXllJKgdXn5Jv0KDNqHmjGp4gbTZ0VKS4E1mhJSZ6iUMDaGOyrhocVN9lWGjhCsGiJbn+ytDYtyFak0bE19AIvGm4aTSUATZ5pnm2KS0o4JmdincbrCZi7gEwN11yuWR6VOIg4uV9VHZ3kYgFfv6qWK9iEwMpjeHBPMbmL5HAknbYbplS45HRLC2HsyNG5sgdbNnpW9rVJ86ex3giMtcAOL/ABO5C73odt1n2lpuGdr6JoGg2rvpV8lpj8GK8UgeI4AGrNX0tJctjFBJs7g3SH1F+ptLPa/mSUjJj42EW+j9OaL/AOLNP4XB32XNuzpRjENK6To4pliMvvdxs87KePxIa0uca/509VCy5u920TLHVzjQULWS0hxFga5DvRTrCOshvUEVv+yaMkcCHP8ALe21Ufr1S8g5OHtfv/uom0ykrNEtPngrw+4r3A3CyTN57keLvzyXy/UVZ8S5xxLy0mi4vBBGxvl7f891Us5gLMRI0gjzEi+e+66XFeWc2shg9tbqa0/gzOSPRRbW3stQ+GuSxg8XMmrTusmDKhmOmZWGw3y+qr+IYWmivRGpMA3wjXovP+a2ZXAiqJFKKV8gQ2YSUU2Es0UjcNq1giuBfxua31ICuh0O57Lb5TztMtEYSLxASATe10ttiawRdOSrKbQDz9m+UGDmoOV6ufxEmuah+H+6orzurSeAomNMbzs7r0DlI+WFgOkm/wDmGre8vmAjCwqhWx86RMcRMTyQlxO6NHRWRcShHqoPWh+UexVic1VrWpqI9ig9G3H+xGThGKS8YJKXFBJnquySEsS7elYdDNqb7Ktx7lWfSBqYK0PJCldXpyZrjX7BJmVIun2HZNjKmzzJ58xLUbLJQHji5WjPFhNuBby2A3/Sc8Yw4IrcbKhfEM8TwWnbqFC5fn7o4OBpIoUFFYnMnvFPN+6ssZM0siRCLIEdhtBwVtlx5p/EcErT9L9NlpOXY3ibw3dfXYLKIHUQfQg7ey0vIZo3Rue0OB4Yy8u5EuHEa7bj6JDmLCYzx9hMQ1zi7gwxxBFE/gAFk0LdsDt6HmivyaQgExxwuILgOJltI6Et5/ZWV2AsbSFgNHycz72kXZcyMcQtxcWt4nkuPmND9yFzrq2joWzsPjYQ6Bu25AHJQIyh1gDE+ERRBDD9aPEK6ct/7WvFtb4VcQ8tVvW/paZ5ZUgcHNFtNFjqNGuY9vdWWCNdsDU5Yym3M+RwoW4t8xHXkTd77mkebCnho7f87BSM72xjkB2ATF+N8Q1y6IN5JYZ4fLg0hxbfW7/lQ/xAyeIxR4uJ3mHBDIwmrAsNLQRdjYduys0zi0NNcTS7hdRqvQqnfEGXhEcQJoufIB7UAP3Lk5x3+aE60PwbKiCrRo3UDoXm3bUKHoqm1BhIK6dxFo1PN9dtLeA3Z6rPc0nD3lw6pnIeq4XoqyBYCUugk2FFleoEeZTiy2VrrqjfNXPH62eyPhYbJ23VChalXnZGwGhTMMydM63JiWIt7pW1XYSa0q2p2rbcK24x2WJaU/Patxy+I8A+iyqhQ2cw2lYbCkmQBKeCFiXG7RarWt4vku7FW6gFVNcSfKPYoPRtx81EYfNEQiMhJUqaK4WBJnpv0kN42cKm9IS/PChZBal9JMqcK0dmXI+to2FrQWjsiHDp1hoxwjslg0Js8u9nmMpIpQFEpMNlWHYiyJeHDOdyFpycrkI/CUADGJ6cApWLJJv0FPWZDN+lWiw3Imt1fdF4kPw5jBoscxr+p4HOc5p9hbnD6Ko4nLJGbubQUlo/GiGfzbNe0sN8gebSfqK+qw5KTg0Mce6ldF2wGJexwaTY5c06zVr5iGRnhoF3EdxdED67pphZA4miCNqI6pyMc2IHi5k7bWT7ADcrjLZ1L4Ib/p3EvYBNObILiWkiiDt36eylsHgXwgPMnG5uzzyBb29k0xWZ4xxqLByEf4Xvaxm3+o319EqzGTD8cbeKrLGTMca7f7rS2MlEx9jzx8rpIQM4fdGwUzXM4uW9cJFEexSOIkAVC5KYEtIcHkgdNro7bk9Fnuv8R4mKIBtsbWx7EEWSXGj/AKgPorTlrHSPNvd4dXwNPCCRsSTz/wDxUTNMC5r3XZsk2eu6f4iy5MS5F5fjFETxIyMYUoxqd/VivYsuPUfoL0RGtT/DYbiIaOqu2WaGD2gkXaKqxegVKE6fkjPTsuMiWsRfD9n6U+w+ho2/4R9kf1EYmQNhd0B+xQdGRzBHcLcWaZhaK4R9gqRrTLWM3aAg6yRtRoupLqZ8/DlcMZUkQEg7dLvlL0jor4uXtktouL54W6YA0wLEtItqYLa8A3yhRVHNZFeVx1Rdh4CgXLhNJrNOiKi7nKoa7Pyj2U+ZiVWNcO+UeyD0McVfuIytjSlXLoTeeVJnqW7I5PKApDSTycQ1QMjrKntJPAnarR2J15XgzasLfCOycBNoJfKK9EDKU4jzT2ecmBBsa5C1L3SWdSR2IcaCzYu2hsC1zdx6q7MyqOuQVX+H48l91doymIPBy+QkqjSGsGBj9AnAwjPQI4bulHNVzArGscGwREgdFlgK1bWzqhPZZKClq2ztcC3Qs+mcyryE7iyOysbZC93GBZA4QTtQPOlnMUxa4OHT9/UKzyyzxSgbxUGu4TvYc0OB+oIP1SU4ZubVbRf8k+/IDJu6VzB+lrzX7lLR5I1gpshrrZBJ+qr0moXg+YH0sWfsm8+fyuNC2jpex+/NBRMnImMXI2IkNfZ2sEpLGYk8I9T09FBPAPm5u5lxJ3T7LCXEA+qiiDsXfTOG2Ni+Flu9rIH8lUvVrgJq7rUcNgjh8sxU7/I90L5GBw3aGNLo7H/udW3pSyLUuJa9zZBycA4e19E4otU7g4k06zIyQApAR7oNmS7d1iddWkOctPzG9wtu09+WPosNwUZ8Rp9wtnyLEVGFvSOX8n6LIGrjnBRxxybvlcVucYcYh9nZUHXrPKVf8NBtZVJ+IjPIVWWhriO1VGZveusakWBLuNBKHo0yX00/5zQFs2AeeALFNKX44K2bCy0wJilo43yTvJD10iS4LSTJbThgWpyzrIVTfiI7hiPZXGTEAKla/PFEVWWhji/ajKHYxNnzWl34RF/pSlD0ElNibd1OaVZWIaouHD0pnT4+c1WjspUj+DubLAfIOyKQUjhyeEJYTJxHmns88CRFNkowYjhtJI7+TSPh8KiVxBVK0XKGwgkhvuSApfEakgj5u4j6N3/dO04tpWOJyPsZY2FLELP8Vryj8uMD3cSUwxOtsQ4bPDf8rWj91sqTMCz62YfCPXZZgzAvP+Ej/MQ3+U7xObTS/jkc71LnEpKKQnt69SqvjKTyxyjy5Uo9UgmKwYjic9zrcAeAN5X7k81uGq9JjFYeKaL81kUYr/1G8IoX6jp3WE5zPbCBy3XqPTfmwmHPrDB/2NWVanGKsij5E5y7SZ51zbDvYQKI6GwQQQSCCOhsKMDXcVHpR+62n4p5ThOASPlbDMd2N4XOdL03a3f/AFKq6E0ZFjHve7FMIbw8UETZBJyABLpAKbt0ae4SPRp2Hsun+o07f8Kjg8I6Rwa1peTVNaCSfotd0RopsDRNiGh0vNsfNsXpY5Od+w/dWnKdPQYcVFGG+rqtx7nmhqLNo8Jh5MRJ+GNpdXV7uTWD3LiB9VtTpZE6la+igfGjUgZE3BMd55eGSej+GNptrT7ucAezD6rKY4PEYG8XCRZZfI+x9EhmGYSYiZ88p4nyOL3eg9Gj2AAA9gEaOal0VTi49WYQqShLtHYmMK5pp7S09LHPseR+icsNJZmPcBV8QPNrgHN+xSjRHJzBiPq3zN+rT/YhKz4b/wDLudeh8nBK01YJhZhxt7ha7kmHJjFeix+PLZGvaRUjbHmZvXdvMfwtn0u/5TewWcIuOGrFOfVjUinF3D/0rwneFvqE/MgQa0c1qcoBdQVF1822FXHEYjoqlrM3GeyrLQxxfsRlkbKSU7ku9yZuO6UsellqxO6V/Oathw8JLAsb0w+pmrbMtnHAExS0cX5HyQ2otXTiuikZGgpt/R7rU5o3ZvuVW9cflnsriMKqrrmICJ3YoS0bcd/uIyuMrriAmRlpAOJSZ6buOS5Pcil+e0e6i5n0E502fntPujHZjXl+LRuODbbAjmBcy53kHZO7CcR5l7PNT30loJQG8RaHG6AduB6muqaTOXb8ldyPusqCXbJ0uVUajhkscxeRV7eg2A7AJtJOSkmusJN7l0O2DlCnGlOJN2JQqXJYM1xvnY9De3ZOXTbUNr5n2TZqOCig2CyR8Raz9RDfua/uvS0mcf0eXRvbGZZBGxkMTb87uEc65NHMn+5C8+aXwhmx0EYF257q/wArHO/+K9AY9sbMOZJncLYmUfYcth6k1t2CXrF4K8kjFMXjsRNI9+KJL3HiLnNLSeewHRo5ABRuA1DLhp2zwO4XMO3o4dWOHVpGxH96UnmONE0zn7tbTqbZHCAfKCRzNX9SVd/htpjCvw7MUYy98nE0ueQeEtcWkADkNu5BSHXtLB6nk1JUOLGM/wCGaJpnUUWOwzMRFte0kZPmikH4mO7dD1BB6rJvjZqPxJWYJjvLFUs9HnIR5GnsDf8AqHor/nmOgyyJ8zIw2wS9jABxnkwn34iBfuV53xeKdLI+WQ8T5HOe8+pcbP0T9GHs8pLeBNqXaiYeFz3NYwFznENa0cySaASuOwb43GORpaR09R6g9R7phACmUXVi/ROIXUmEUbW1Qq/qnIkRTfsDH7MVSmMs1TiIj5JNv0vAeP3VbBS0a0w9gNWyXWbJKEw8N3622WH6cx+6s/jBzbaQ4HkWkEH6hYWzFcKkst1NJA4PDzfVm3C4ejh1/ssZ0E8rAbs2GODqVV9dH5ZA9FJ6f1HHjIuOPyubTZIybLCRY36g9D7H0UHriSoyk5q1xni/YjMJTsmzUfESWiRpQ9G3dk5pgDxmracBEOAUsT01+e1bXlknkC3paOR8j5IeMYj8lzxQknTBanMOySFVPXA+Ueys75wFU9bzfKPZB6N+N9iMmdh0oyOgjNmSE8t7BKHpMIRk3KlckFSs7qOjZW6e5U/5re6MdmM/Fmx4Nx8MJT+ocjZWR4Y7JwYwm0ebls82NFlOJpeLpXSvZBBUoDPJehPDO2I9DSBcuoJlPAqLRo4QQWiIdtdBQQViFy+DsHHmYP6IZndiSxo/7irP8Qc+/qJ/6aM/KhPnI5SSjn9G8u9+yCCT5Dsdj4WlGdbs/WikZxfCQ3YbWBta0D4P42mPw7uQHjtHY8Lh+7EEEpT8jufJ04ujNv0v7IT4zZuTKzCg7ipp6PIkfLZ9BbiPdqzVdQXWgsI8WOcvx8kDxLC7ge3drqa6vUbjkeR9iR1UvqXVc2NbEJGsjEQcSI+T3uJ4n77tFV5bPU2b2CClle5LvRAtF7/b/wC0oEEFZAFWIzpaC6grAGhxF2eg/lIHEWeaCCxlJhRcvhzjDFi2MBsTcUbgPZpe0/Th/cq1a+afDKCCwr/0M8X7EZW8o8QQQSJ6BbJrTu0rVrWEldwBBBb0tHL+S8kOGSEo/CV1BbHLDMh9VV9d7REey4gqy0McX7UZYY0TgQQSh6RpAcE5yttSN7hBBFbMqvizZsqj+WE/awoIJz0eZltn/9k=')
userCollection.addUser(user1)
userCollection.addUser(user2)
userCollection.show()