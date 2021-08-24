const mainController = {
    index: (req, res) => {
        let lang = ["English | advanced", "Japanese | begginer"];

        let eng = [
            "11 years of formal education from 1999 to 2010 in Amicana and Master institute.",
            "Audiovisual translator.",
            "Vast experience as translator for wineries, and city tours.",
        ];
        let jpn = [
            "I am currently learning the basics of japanese, hope to visit japan one day, wish me luck!",
        ];

        let = codeSkills = [
            "HTML, CSS, Javascript",
            "Express",
            "Git",
            "Scrum",
            "React",
            "C",
            "EJS",
        ];

        res.render("index.ejs", {
            lang: lang,
            eng: eng,
            jpn: jpn,
            codeSkills: codeSkills,
        });
    },
};

module.exports = mainController;