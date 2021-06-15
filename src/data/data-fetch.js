const cheerio = require('cheerio')
const fs = require('fs')


let data = {}

const fields = [
    'Institution',
    '',
    'Nickname(s)/also called',
    'City',
    'State',
    'Control',
    'Type',
    'Religious Affiliation',
    'US News National Rank',
    'US News LAC Rank',
    'US News Engineering',
    'US News Business',
    'Undergraduate enrollment',
    'Percent of student body that is undergraduate',
    'Total international undergraduates',
    'Countries represented',
    'Undergrad percent international students',
    'International students receiving aid',
    'Estimated cost of attendance (COA)',
    'Types of aid available',
    "Percent of int'l students receiving aid",
    'Average award to international students',
    'Award as percentage of total COA',
    'COA after average award',
    'Total aid in millions',
    "Largest merit scholarship available to int'l students",
    'Name of merit scholarship',
    'Merit scholarship info',
    'SAT EBRW 25%ile',
    'SAT EBRW 75%ile',
    'SAT Math 25th %ile',
    'SAT Math 75th %ile',
    'ACT Composite 25th %ile',
    'ACT Composite 75th %ile',
    'ACT English 25% ile',
    'ACT English 75%ile',
    'ACT Math 25%ile',
    'ACT Math 75%ile',
    'Overall acceptance rate',
    'International students applying for Fall 2017',
    'International student acceptence rate',
    'International yield',
    'SAT/ACT requirement',
    'SAT/ACT Essay',
    'SAT Subject Tests',
    'Early decision deadline',
    'ED2 deadline',
    'Early action deadline',
    'Priority Deadline',
    'Final application deadline',
    'ED admit rate',
    'Minimum TOEFL',
    'TOEFL Notes',
    'Final min IELTS',
    'Conditional admission / remedial English',
    'SAT for proficiency',
    'ACT for proficiency',
    'Business Co-op?',
    'Engineering Co-op?',
    'Computer Science Co-op?',
    'Other Co-ops?',
    'Athletic scholarships for international students',
    'On-campus jobs for students without need',
    'Average earned/year for campus employment',
    'International freshman retention rate',
    'Overall freshman retention rate',
    '6-year graduation rate of international students',
    'Overall 6-year graduation rate'
  ]

fs.readFile('/Users/haidershawl/Desktop/react-college-app/src/data/page.html' ,(err, body) => {
    const $ = cheerio.load(body)


    for (let i = 1; i < 309; i++) {
        let name = ""
        $( '#0R' + i.toString() ).nextAll().each(function (i, e) {
            if (i == 0){
                name = $(this).html()
                data[name] = {}
            }
            data[name][fields[i]] = $(this).html()
        })  
    }

    data = JSON.stringify(data)

    fs.writeFile('/Users/haidershawl/Desktop/react-college-app/src/data/data.json', data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log("saved")
        }
    })
})







