function isn(n) {
    if (n == ' ') {
        return 'a' * 1;
    }
    return n * 1;
}
function findn(str) {
    var arr = [];
    if (!isNaN(isn(str))) {
        arr.push(isn(str));
        return arr;
    }
    var prevnum = -1;
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(isn(str.slice(i, i + 1))) && prevnum != -1) {
            prevnum = 10 * prevnum + isn(str.slice(i, i + 1));
        }
        else if (!isNaN(isn(str.slice(i, i + 1))) && prevnum == -1) {
            prevnum = isn(str.slice(i, i + 1));
        }
        else if (isNaN(isn(str.slice(i, i + 1))) && prevnum != -1) {
            arr.push(prevnum);
            prevnum = -1;
        }
    }
    if (prevnum != -1) {
        arr.push(prevnum);
    }
    return arr[0];
}
function alwayswinbr(oppnum) {
    if (oppnum % 4 == 0) {
        return oppnum + 2;
    }
    else if (oppnum % 4 == 1) {
        return oppnum + 1;
    }
    else {
        return oppnum + 3;
    }
}
function find_num(str) {
    var num = str.replace(/[^0-9]/g, "")
    return num;
}

function randomnum(startnum, endnum) {
    var randint = Math.floor(Math.random() * (endnum - startnum + 1));
    if (randint == (endnum - startnum + 1)) {
        randint--;
    }
    return (randint + startnum);
}

function makepsw() {
    var psw = ""
    var rand = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (var i = 0; i <= 20; i++) {
        psw += rand.charAt(Math.floor(Math.random() * rand.length))
    }
    return psw;
}

function find_info() {
    var student_info = fs.readFileSync('./student_information/student_info.txt', 'utf8')
    var detect_id = student_info.split('\n')
    var result = 'no info'
    for (var i = 0; i < detect_id.length; i++) {
        if (detect_id[i].includes(id)) {
            result = class_info(detect_id[i])[1]
        }
    }
    return result
}

function find_grade() {
    var result = find_num(find_info())[0].toString()
    return result
}

function class_info(str) {
    str = str.toString().split(':')
    return str;
}

function predict_score(subject, subject_file, score) {
    var result, rank, people_num, ranking
    var file = fs.readFileSync(subject_file, 'utf8').toString().split('\n')
    for (var i = 0; i < file.length; i++) {
        if (file.sort()[i] == score) {
            people_num = file.length - 1
            rank = people_num - (i - 1)
            if ((people_num - i) / file.length * 100 <= 4) {
                ranking = 1
            } else if (rank / people_num * 100 <= 11) {
                ranking = 2
            } else if (rank / people_num * 100 <= 23) {
                ranking = 3
            } else if (rank / people_num * 100 <= 40) {
                ranking = 4
            } else if (rank / people_num * 100 <= 60) {
                ranking = 5
            } else if (rank / people_num * 100 <= 77) {
                ranking = 6
            } else if (rank / people_num * 100 <= 89) {
                ranking = 7
            } else if (rank / people_num * 100 <= 96) {
                ranking = 8
            } else {
                ranking = 9
            }
        }
    }
    result = '과목: ' + subject + '\n총 인원: ' + people_num + '\n등수: ' + rank + '\n등급: ' + ranking + '\n\n'
    return result
}

function del_score() {
    fs.writeFileSync('./exam_score/1_grade/language.txt','')
    fs.writeFileSync('./exam_score/1_grade/math.txt','')
    fs.writeFileSync('./exam_score/1_grade/social.txt','')
    fs.writeFileSync('./exam_score/1_grade/science.txt','')
    fs.writeFileSync('./exam_score/1_grade/eng.txt','')
    fs.writeFileSync('./exam_score/1_grade/history.txt','')
}

var isEmpty = function (value) {
    console.log('function start')

    if (value == "" ||
        value == null ||
        value == undefined ||
        (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true
    } else {
        return false
    }
};
function detectword(stringmsg) {
    stringmsg = stringmsg.replace(/밥/g, '급식')
    if (stringmsg.charAt(0) == '/') {
        return "/c!@#$%";
    }
    else if (stringmsg.includes('오늘') && stringmsg.includes('급식')) {
        return '오늘 급식';
    }
    else if (stringmsg.includes('내일') && stringmsg.includes('급식')
        && stringmsg.includes('급식') || stringmsg.includes('낼') && stringmsg.includes('급식')) {
        return '내일 급식';
    }
    else if (stringmsg.includes('어제') && stringmsg.includes('급식')) {
        return '어제 급식';
    }
    else if (stringmsg.includes('모레') && stringmsg.includes('급식')) {
        return '모레 급식'
    }
    else if (stringmsg.includes('후') && stringmsg.includes('급식') || stringmsg.includes('뒤') && stringmsg.includes('급식')) {
        return 'N일후 급식'
    }
    else if (stringmsg.includes('전') && stringmsg.includes('급식')) {
        return 'N일전 급식'
    }
    else if (stringmsg.includes('요일') && stringmsg.includes('급식') || stringmsg.includes('욜') && stringmsg.includes('급식')) {
        return 'N요일 급식'
    }
    else if (stringmsg.includes('일주일 급식')) {
        return '일주일 급식'
    }
    else if (stringmsg.includes('오늘') && stringmsg.includes('일정') || stringmsg.includes('일과')) {
        return '오늘 일정'
    }
    else if (stringmsg.includes('내일') && stringmsg.includes('일정') || stringmsg.includes('낼') && stringmsg.includes('일정') || stringmsg.includes('일과')) {
        return '내일 일정';
    }
    else if (stringmsg.includes('모레') && stringmsg.includes('일정') || stringmsg.includes('일과')) {
        return '모레 일정';
    }
    else if (stringmsg.includes('문제')) {
        return '문제점';
    }
    else if (stringmsg.includes('한달') && stringmsg.includes('급식') || stringmsg.includes('이번달') && stringmsg.includes('급식')) {
        return '한달 급식';
    }
    else if (stringmsg.includes('한달') && stringmsg.includes('일정') || stringmsg.includes('일과')) {
        return '한달 일정'
    }
    else if (stringmsg.includes('일정') || stringmsg.includes('일과')) {
        return '일정'
    }
    else if (stringmsg.includes('급식')) {
        return '급식'
    }
    else if (stringmsg.includes('안녕') || stringmsg.includes('ㅎㅇ') || stringmsg.includes('안뇽') || stringmsg.includes('하이')) {
        return '안녕'
    }
    else if (stringmsg.includes('알았어') || stringmsg.includes('ㅇㅋ') || stringmsg.includes('ㅇ')) {
        return '응'
    }
    else if (stringmsg.includes('ㅋ')) {
        return 'ㅋ'
    }
    else if (stringmsg.includes('사용')) {
        return '사용법'
    }
    else if (stringmsg.includes('문제')) {
        return '문제점'
    }
    else if (stringmsg.includes('개발') && stringmsg.includes('정보')) {
        return '개발자 정보'
    }
    else if (stringmsg.includes('알았어')) {
        return '네'
    }
    else if (stringmsg.includes('한달')) {
        return '한달'
    }
    else if (stringmsg.includes('오늘')) {
        return '오늘'
    }
    else if (stringmsg.includes('모레')) {
        return '모레'
    }
    else if (stringmsg.includes('짱')) {
        return '짱'
    }
    else if (stringmsg.includes('기본') && stringmsg.includes('주사위')) {
        return '기본 주사위'
    }
    else if (stringmsg.includes('1') && stringmsg.includes('예측하기') || stringmsg.includes('2') && stringmsg.includes('예측하기') || stringmsg.includes('3') && stringmsg.includes('예측하기') || stringmsg.includes('4') && stringmsg.includes('예측하기') || stringmsg.includes('5') && stringmsg.includes('예측하기') || stringmsg.includes('6') && stringmsg.includes('예측하기')) {
        return '주사위 게임 N'
    }
    else if (stringmsg.includes('주사위') && stringmsg.includes('게임')) {
        return '주사위 게임'
    }
    else if (stringmsg.includes('주사위') || stringmsg.includes('주사위') && stringmsg.includes('정보')) {
        return '주사위 정보'
    }
    else if (stringmsg.includes('시간표')) {
        return '시간표'
    }
    else if (stringmsg == '1-1' || stringmsg == '1-2' || stringmsg == '1-3' || stringmsg == '1-4' || stringmsg == '1-5' || stringmsg == '1-6' || stringmsg == '2-1' || stringmsg == '2-2' || stringmsg == '2-3' || stringmsg == '2-4' || stringmsg == '2-5' || stringmsg == '2-6' || stringmsg == '3-1' || stringmsg == '3-2' || stringmsg == '3-3' || stringmsg == '3-4' || stringmsg == '3-5' || stringmsg == '3-6') {
        return '시간표 말하기'
    }
    else if (stringmsg.slice(0, 8) == '(베스킨라빈스)' && !isNaN(isn(stringmsg.charAt(8)))) {
        return '베스킨라빈스 N'
    }
    else if (stringmsg.includes('베스킨라빈스') || stringmsg.includes('베라') || stringmsg.includes('베스킨라베스') || stringmsg.includes('베스킨 라빈스 31')) {
        return '베스킨라빈스 31'
    }
    else if (stringmsg.includes('지금') && stringmsg.includes('시간')) {
        return '지금시간'
    }
    else if (stringmsg.includes('게임') && stringmsg.includes('추천')) {
        return '게임 추천해줘'
    }
    else if (stringmsg.includes('게임')) {
        return '게임'
    }
    else if (stringmsg.includes('하면 ') && (stringmsg.includes('이라고') || stringmsg.includes('라고') || stringmsg.includes('이라') || stringmsg.includes('라'))) {
        return 'addnewment//';
    }
    else if (stringmsg.includes('요일') && stringmsg.includes('시간표')) {
        return 'N요일 시간표'
    }
    else if (stringmsg.includes('월') || stringmsg.includes('화') || stringmsg.includes('수') || stringmsg.includes('목') || stringmsg.includes('금')) {
        return 'time-table-info'
    }
    else if (stringmsg.includes('학년')) {
        return 'N학년'
    }
    else if (stringmsg.includes('시간표') && ('보기')) {
        return '시간표'
    }
    else if (stringmsg.includes('야')) {
        return '야'
    } else if (stringmsg.includes('년')) {
        return 'special case'
    } else if (stringmsg.includes('ments') && stringmsg.includes('del')) {
        return 'ments_del_psw'
    } else if (stringmsg.includes('-') && stringmsg.includes('반')) {
        return '학생정보 설정 완료'
    } else if (stringmsg.includes(',')) {
        return 'predict'
    } else if (stringmsg.includes('등급')) {
        return '등급'
    }
    else {
        return stringmsg;
    }
}
const Timetable = require('comcigan-parser');
const timetable = new Timetable();
const http = require('http')
var id;

var fs = require('fs');

setInterval(del_score, 1814400000)

setInterval( function() {
    http.get("https://kakaoi-chatbot.herokuapp.com")
}, 1800000)

reactword = function (keymsg, msg, callback) {
    var answer = '';
    var link = '';
    var buttons = [];
    var buttoncore = [];
    var addans = '';
    var iscallback = 0;

    var makerstatement = '[개발자] \n\n이현탁 \n\n연락처 \nhttps://open.kakao.com/o/s6aDxbmc';
    var returnstatement = '돌아왔습니다!';
    var addnewmentstatement = '[말 추가하기] \n\n자신이 원하는 대답을 들을수 있도록 할 수 있어요! \n\n~~ 라 하면 ~~ 라고 해 \n와 같이 말해주세요!';

    var mentsread = fs.readFileSync('./ments/ments.txt', 'utf8');
    var mentsarr = mentsread.split('\n');
    //console.log('커스텀 멘트목록:' + mentsarr);
    var bad_words = fs.readFileSync('./ments/bad_words.txt', 'utf8')
    var detect = bad_words.toString().split(' ');

    var psw = fs.readFileSync('./admin_psw/psw.txt', 'utf8')

    var ments = fs.readFileSync('./ments/ments.txt', 'utf8')

    var student_info = fs.readFileSync('./student_information/student_info.txt', 'utf8')
    var detect_id = student_info.toString().split('\n')

    var first_grade_language = fs.readFileSync('./exam_score/1_grade/language.txt', 'utf8')
    var first_grade_math = fs.readFileSync('./exam_score/1_grade/math.txt', 'utf8')
    var first_grade_social = fs.readFileSync('./exam_score/1_grade/social.txt', 'utf8')
    var first_grade_science = fs.readFileSync('./exam_score/1_grade/science.txt', 'utf8')
    var first_grade_eng = fs.readFileSync('./exam_score/1_grade/eng.txt', 'utf8')
    var first_grade_history = fs.readFileSync('./exam_score/1_grade/history.txt', 'utf8')

    // var second_grade_language = fs.readFileSync('./exam_score/2_grade/language.txt', 'utf8')
    // var second_grade_math_1 = fs.readFileSync('./exam_score/2_grade/math_1.txt', 'utf8')
    // var second_grade_math_2 = fs.readFileSync('./exam_score/2_grade/math_2.txt', 'utf8')
    // var second_grade_math_probability = fs.readFileSync('./exam_score/2_grade/math_probability.txt', 'utf8')
    // var second_grade_physics = fs.readFileSync('./exam_score/2_grade/physics.txt', 'utf8')
    // var second_grade_chemical = fs.readFileSync('./exam_score/2_grade/chemical.txt', 'utf8')
    // var second_grade_biology = fs.readFileSync('./exam_score/2_grade/biology.txt', 'utf8')
    // var second_grade_earth = fs.readFileSync('./exam_score/2_grade/earth.txt', 'utf8')
    // var second_grade_eng = fs.readFileSync('./exam_score/2_grade/eng.txt', 'utf8')

    for (var i = 0; i < detect.length; i++) {
        if (msg.includes(detect[i])) {
            console.log('욕')
            answer = '욕은하지 말아주세요 ㅠㅠ'
            var answerresult = [];
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            answerresult.push(answer);
            answerresult.push(buttons);
            answerresult.push(link);
            answerresult.push(buttoncore);
            answerresult.push(addans);
            callback(answerresult);
            return;
        }
    }


    switch (keymsg) {
        case '학생정보 설정':
            answer = '학년을 선택해주세요'
            buttons = ['1학년', '2학년', '3학년']
            buttoncore = ['1학년', '2학년', '3학년']
            break;
        case 'N학년':
            var grade = findn(msg);
            answer = '반을 선택해주세요'
            if (grade == 1) {
                buttons = [grade + '-1반', grade + '-2반', grade + '-3반', grade + '-4반', grade + '-5반', grade + '-6반', grade + '-7반', grade + '-8반', grade + '-9반', grade + '-10반']
                buttoncore = [grade + '-1반', grade + '-2반', grade + '-3반', grade + '-4반', grade + '-5반', grade + '-6반', grade + '-7반', grade + '-8반', grade + '-9반', grade + '-10반']
            } else if (grade == 2) {
                buttons = [grade + '-1반', grade + '-2반', grade + '-3반', grade + '-4반', grade + '-5반', grade + '-6반', grade + '-7반', grade + '-8반', grade + '-9반', grade + '-10반']
                buttoncore = [grade + '-1반', grade + '-2반', grade + '-3반', grade + '-4반', grade + '-5반', grade + '-6반', grade + '-7반', grade + '-8반', grade + '-9반', grade + '-10반']
            } else if (grade == 3) {
                buttons = [grade + '-1반', grade + '-2반', grade + '-3반', grade + '-4반', grade + '-5반', grade + '-6반', grade + '-7반', grade + '-8반', grade + '-9반', grade + '-10반', grade + '-11반', grade + '-12반', grade + '-13반']
                buttoncore = [grade + '-1반', grade + '-2반', grade + '-3반', grade + '-4반', grade + '-5반', grade + '-6반', grade + '-7반', grade + '-8반', grade + '-9반', grade + '-10반', grade + '-11반', grade + '-12반', grade + '-13반']
            }
            break;
        case '학생정보 설정 완료':
            var info;
            msg = find_num(msg);
            if(msg[2] != null){
                info = msg[0] + '-' + msg[1] + msg[2];
            }else {
                info = msg[0] + '-' + msg[1];
            }
            var student_info = fs.readFileSync('./student_information/student_info.txt', 'utf8') + '\n' + id + ':' + info;
            fs.writeFileSync('./student_information/student_info.txt', student_info);
            answer = '학년 설정이 완료되었습니다'
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case 'test':
            answer = find_info().toString()
            break;
        case 'help':
            answer = 'command_list\n\nments_read\nments_del\n\ninfo'
            break;
        case 'ments_read':
            if (psw == 'admin') {
                answer = ments;
            } else {
                answer = '관리자만 이 명령어를 사용할수 있습니다!'
            }
            console.log(ments.toString())
            break;
        case 'ments_del_psw':
            if (psw == 'admin') {
                answer = '모든 멘트들이 삭제되었습니다'
                fs.writeFileSync('./ments/ments.txt', '', 'utf8')
            } else {
                answer = '관리자만 이 명령어를 사용할수 있습니다!'
            }
            break;
        case 'info':
            answer = student_info;
            break;
        case 'special case':
            answer = '욕은하지 말아주세요 ㅠㅠ'
            break;
        case '등급':
            var ans = '챗봇 예상 등급 기능을 이용해주셔서  감사합니다\n\n챗봇 예상 등급 기능은 학생들이 입력한 점수를 기반으로 하기에 실제 등급과는 차이가 있을수 있습니다.\n\n입력된 점수는 암호화되어 보호됩니다'
            if(find_info() == 'no info'){
                answer = '학생정보를 설정해주세요'
                buttons = ['학생정보 설정', '메뉴']
                buttoncore = ['학생정보 설정', '메뉴']
            }else if (find_grade() == '1') {
                answer = ans
                addans = '아래의 형식과 같이 점수를 입력해주세요.\n\n국어,수학,통합사회,통합과학,영어,역사\n\nex)97,100,90,95,96,92\n\n미응시 과목은 0점으로 기록해주세요'
            } else if (find_grade() == '2') {
                answer = ans
                addans = '아래의 형식과 같이 점수를 입력해주세요\n\n문학,수학1,수학2,확률과 통계,물리,화학,생물,지구과학,영어\n\nex)97,100,90,95,96,92\n\n미응시 과목은 0점으로 기록해주세요'
            } else if (find_grade() == '3') {
            }
            break;
        case 'predict':
            var score
            if (find_grade() == 1) {
                var language, math, social, science, eng, history
                var language_ment, math_ment, social_ment, science_ment, eng_ment, history_ment = "0";
                score = msg.split(',')
                language = first_grade_language + '\n' + score[0]
                math = first_grade_math + '\n' + score[1]
                social = first_grade_social + '\n' + score[2]
                science = first_grade_science + '\n' + score[3]
                eng = first_grade_eng + '\n' + score[4]
                history = first_grade_history + '\n' + score[5]

                if (first_grade_language.includes(score[0])) {
                    fs.writeFileSync('./exam_score/1_grade/language.txt', first_grade_language + '\n')
                } else {
                    fs.writeFileSync('./exam_score/1_grade/language.txt', language)
                }

                if (first_grade_math.includes(score[1])) {
                    fs.writeFileSync('./exam_score/1_grade/math.txt', first_grade_math + '\n')
                } else {
                    fs.writeFileSync('./exam_score/1_grade/math.txt', math)
                }

                if (first_grade_social.includes(score[2])) {
                    fs.writeFileSync('./exam_score/1_grade/social.txt', first_grade_social + '\n')
                } else {
                    fs.writeFileSync('./exam_score/1_grade/social.txt', social)
                }

                if (first_grade_science.includes(score[3])) {
                    fs.writeFileSync('./exam_score/1_grade/science.txt', first_grade_science + '\n')
                } else {
                    fs.writeFileSync('./exam_score/1_grade/science.txt', science)
                }

                if (first_grade_eng.includes(score[4])) {
                    fs.writeFileSync('./exam_score/1_grade/eng.txt', first_grade_eng + '\n')
                } else {
                    fs.writeFileSync('./exam_score/1_grade/eng.txt', eng)
                }

                if (first_grade_history.includes(score[5])) {
                    fs.writeFileSync('./exam_score/1_grade/history.txt', first_grade_history + '\n')
                } else {
                    fs.writeFileSync('./exam_score/1_grade/history.txt', history)
                }
                language_ment = predict_score('국어', './exam_score/1_grade/language.txt', score[0])
                math_ment = predict_score('수학', './exam_score/1_grade/math.txt', score[1])
                social_ment = predict_score('사회', './exam_score/1_grade/social.txt', score[2])
                science_ment = predict_score('통합과학', './exam_score/1_grade/science.txt', score[3])
                eng_ment = predict_score('영어', './exam_score/1_grade/eng.txt', score[4])
                history_ment = predict_score('한국사', './exam_score/1_grade/history.txt', score[5])
                answer = language_ment + math_ment + social_ment + science_ment + eng_ment + history_ment
            }
            break;
        case 'score_read':
            answer = first_grade_language.toString()
            break;
        case '시간표':
            if (find_info() == 'no info') {
                answer = '학생정보를 설정해주세요'
                buttons = ['학생정보 설정', '메뉴']
                buttoncore = ['학생정보 설정', '메뉴']
            } else {
                answer = '요일을 선택해주세요'
                buttons = ['월', '화', '수', '목', '금']
                buttoncore = ['월', '화', '수', '목', '금']
            }
            break;
        case 'time-table-info':
            iscallback = 1;
            var class_day_info = msg;
            var grade_class = find_info() //ex) 1-2
            var ngrade = find_num(grade_class)[0]
            var nclass;
            if(find_num(grade_class)[2] != null){
                nclass = find_num(grade_class)[1] + find_num(grade_class)[2]
            }else {
                nclass = find_num(grade_class)[1]
            }
            console.log(nclass)
            var day;
            var day_num;
            if (msg.includes('월')) {
                day = '월'
                day_num = 0;
            } else if (msg.includes('화')) {
                day = '화'
                day_num = 1
            } else if (msg.includes('수')) {
                day = '수'
                day_num = 2
            } else if (msg.includes('목')) {
                day = '목'
                day_num = 3
            } else if (msg.includes('금')) {
                day = '금'
                day_num = 4
            }
            if (grade_class.toString() == 'no info') {
                answer = '학생정보를 등록해주세요'
            } else {
                timetable.init()
                    .then(() => {
                        return timetable.setSchool('분당중앙고')
                    })
                    .then(() => {
                        return timetable.getTimetable()
                    })
                    .then(result => {
                        data_type = result[ngrade][nclass][day_num];
                        last_type = ngrade + '학년 ' + nclass + '반 ' + '시간표(' + day + '요일' + ')\n\n';
                        for (var i = 0; i < data_type.length; i++) {
                            last_type += (i + 1) + '교시: ' + data_type[i].subject.slice(0, 5) + '(' + data_type[i].teacher.slice(0, 3) + ')\n';
                        }
                        console.log(last_type);
                        answer = last_type;
                        addans = '비어있는곳은 수업이 없는거에요!'
                        buttons = ['메뉴', '다른 시간표 보기']
                        buttoncore = ['메뉴', '다른 시간표 보기']
                        answertype = 6;
                        var answerresult = [];
                        answerresult.push(answer);
                        answerresult.push(buttons);
                        answerresult.push(link);
                        answerresult.push(buttoncore);
                        answerresult.push(addans);
                        answerresult.push(answertype);
                        callback(answerresult);
                    })
                    .catch(err => {
                        console.error(err)
                        answer = '시간표 정보를 불러오는데 실패했어요...ㅠㅠ'
                        buttons = ['메뉴']
                        buttoncore = ['메뉴']
                        var answerresult = [];
                        answerresult.push(answer);
                        answerresult.push(buttons);
                        answerresult.push(link);
                        answerresult.push(buttoncore);
                        answerresult.push(addans);
                        answerresult.push(answertype);
                        callback(answerresult);
                    })

            }
            break;
        case '오늘 급식':
            iscallback = 1;
            var dt = new Date();
            var Alerge = ' \n\n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요';
            school.getMeal().then(function (result) {
                var day = dt.getDate();
                var mealday = result[day]
                var today_meal = mealday
                if (!today_meal) {
                    today_meal = '오늘은 급식이 없어요 ㅠㅠ'
                    Alerge = ''
                    console.log('no meal')
                } else {
                    console.log(today_meal)
                }
                answer = '🍚오늘 급식입니다!'
                addans = today_meal + Alerge
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '내일 급식':
            iscallback = 1;
            var dt = new Date();
            dt.setDate(dt.getDate() + 1)
            var Alerge = ' \n\n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요';
            school.getMeal(dt.getFullYear(), dt.getMonth() + 1).then(function (result) {
                var day = dt.getDate();
                var mealday = result[day]
                var tomorrow_meal = mealday
                if (!tomorrow_meal) {
                    tomorrow_meal = '내일은 급식이 없어요 ㅠㅠ'
                    Alerge = ''
                    console.log('no meal')
                    answertype = 11;
                } else {
                    console.log(tomorrow_meal)
                    answertype = 1;
                }
                answer = '🍚내일 급식입니다!'
                addans = tomorrow_meal + Alerge
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '모레 급식':
            iscallback = 1;
            var dt = new Date();
            dt.setDate(dt.getDate() + 2)
            var Alerge = ' \n\n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요';
            school.getMeal(dt.getFullYear(), dt.getMonth() + 1).then(function (result) {
                var day = dt.getDate();
                var mealday = result[day]
                var twotomorrow_meal = mealday
                if (!twotomorrow_meal) {
                    twotomorrow_meal = '모레는 급식이 없어요 ㅠㅠ'
                    Alerge = ''
                    console.log('no meal')
                    answertype = 11;
                } else {
                    console.log(twotomorrow_meal)
                    answertype = 1;
                }
                answer = '🍚모레 급식입니다!'
                addans = twotomorrow_meal + Alerge
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '어제 급식':
            iscallback = 1;
            var dt = new Date();
            var Alerge = ' \n\n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요';
            school.getMeal().then(function (result) {
                var day = dt.getDate() - 1
                var mealday = result[day]
                var yesterday_meal = mealday
                if (!yesterday_meal) {
                    yesterday_meal = '어제는 급식이 없어요 ㅠㅠ'
                    Alerge = ''
                    console.log('no meal')
                    answertype = 11;
                } else {
                    console.log(yesterday_meal)
                    answertype = 1;
                }
                answer = '🍚어제 급식입니다!'
                addans = yesterday_meal + Alerge
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case 'N일후 급식':
            iscallback = 1;
            var dt = new Date();
            dt.setDate(dt.getDate() + findn(msg))
            var Alerge = ' \n\n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요';
            school.getMeal(dt.getFullYear(), dt.getMonth() + 1).then(function (result) {
                var day = dt.getDate()
                var mealday = result[day]
                var n_meal = mealday
                if (!n_meal) {
                    n_meal = '그때는 급식이 없네요 ㅠㅠ'
                    Alerge = ''
                    console.log('no meal')
                    answertype = 11;
                } else {
                    console.log(n_meal)
                    answertype = 1;
                }
                answer = '🍚' + findn(msg) + '일후' + '급식입니다!'
                addans = n_meal + Alerge;
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case 'N일전 급식':
            iscallback = 1;
            var dt = new Date();
            school.getMeal().then(function (result) {
                var day = dt.getDate() - findn(msg);
                var mealday = result[day]
                var n_meal = mealday
                if (!n_meal) {
                    n_meal = '그때는 급식이 없었네요 ㅠㅠ'
                    console.log('no meal')
                } else {
                    console.log(n_meal)
                }
                answer = n_meal + ' \n\n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요';
                var answerresult = [];
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case 'N요일 급식':
            iscallback = 1;
            var dt = new Date();
            var week;
            var Alerge = ' \n\n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요';
            school.getMeal().then(function (result) {
                var weekday = 0//sunday,qingqitian
                if (msg.includes('월요일') || msg.includes('월욜')) {
                    week = '월요일'
                    weekday = 1;
                }
                else if (msg.includes('화요일') || msg.includes('화욜')) {
                    week = '화요일'
                    weekday = 2;
                }
                else if (msg.includes('수요일') || msg.includes('수욜')) {
                    week = '수요일'
                    weekday = 3;
                }
                else if (msg.includes('목요일') || msg.includes('목욜')) {
                    week = '목요일'
                    weekday = 4;
                }
                else if (msg.includes('금요일') || msg.includes('금욜')) {
                    week = '금요일'
                    weekday = 5;
                }
                else if (msg.includes('토요일') || msg.includes('토욜')) {
                    weekday = 6;
                }
                var day = dt.getDate() + (weekday - dt.getDay());
                var mealday = result[day]
                var n_meal = mealday
                if (!n_meal) {
                    n_meal = week + ' 에는급식이 없었네요 ㅠㅠ'
                    Alerge = ''
                    if (weekday - dt.getDay() > 0) {
                        n_meal = week + ' 에는급식이 없어요 ㅠㅠ'
                    }
                    if (weekday - dt.getDay() == 0) {
                        n_meal = '오늘은 급식이 없어요 ㅠㅠ'
                    }
                    console.log('no meal')
                    answertype = 11;
                } else {
                    console.log(n_meal)
                    answertype = 1;
                }
                answer = '🍚' + week + ' 급식입니다!'
                addans = n_meal + Alerge
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '사용법':
            answer = '[챗봇에게 말을 걸어보세요!] \nex)오늘 급식 머야? \n오늘 일정 머니? \n한달치 급식 보여줘 등등..\n\n이제 한번 해보실래요?';
            buttons = ['그랭']
            buttoncore = ['그랭']
            break;
        case '그랭':
            answer = '알겠습니다!'
            addans = '여기 몇가지로 예로 버튼을 만들어드렸습니다!\n\n어느정도 감이 잡히셧으면 직접 채팅하며 사용해보세요!\n\n생각보다 기능이 많아요!'
            buttons = ['오늘 급식', '오늘 일정', '미니 게임', '메뉴 보기']
            buttoncore = ['오늘 급식', '오늘 일정', '미니 게임', '메뉴 보기']
            break;
        case '오늘 일정':
            iscallback = 1;
            var dt = new Date();
            school.getCalendar().then(function (result) {
                var day = dt.getDate();
                var noticeday = result[day]
                var today_Notice = result[noticeday]
                if (today_Notice == null) {
                    today_Notice = '오늘은 특별한 일정이 없네요!'
                    console.log('no Notice')
                } else if (today_Notice.includes('방학')) {
                    today_Notice = '즐거운 방학 보내세요~'
                    console.log(today_Notice)
                }
                answer = today_Notice;
                buttons = ['메뉴 보기', '다른날 일정도 보기']
                buttoncore = ['메뉴 보기', '다른날 일정도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '내일 일정':
            iscallback = 1;
            var dt = new Date();
            dt.setDate(dt.getDate() + 1)
            school.getCalendar(dt.getFullYear(), dt.getMonth() + 1).then(function (result) {
                var day = dt.getDate();
                var noticeday = result[day]
                var tomorrow_Notice = result[noticeday]
                if (!tomorrow_Notice) {
                    tomorrow_Notice = '내일은 특별한 일정이 없네요!'
                    console.log('no Notice')
                    answertype = 11;
                } else {
                    console.log(tomorrow_Notice)
                    answertype = 1;
                }
                answer = tomorrow_Notice;
                buttons = ['메뉴 보기', '다른날 일정도 보기']
                buttoncore = ['메뉴 보기', '다른날 일정도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '모레 일정':
            iscallback = 1;
            var dt = new Date();
            dt.setDate(dt.getDate() + 2)
            school.getCalendar(dt.getFullYear(), dt.getMonth() + 1).then(function (result) {
                var day = dt.getDate() + 2
                var noticeday = result[day]
                var twotomorrow_Notice = result[noticeday]
                if (!twotomorrow_Notice) {
                    twotomorrow_Notice = '모레는 특별한 일정이 없네요!'
                    console.log('no Notice')
                    answertype = 11;
                } else {
                    console.log(twotomorrow_Notice)
                    answertype = 1;
                }
                answer = twotomorrow_Notice;
                buttons = ['메뉴 보기', '다른날 일정도 보기']
                buttoncore = ['메뉴 보기', '다른날 일정도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '한달 일정':
        case '한달일정':
        case '요번달 일정':
        case '요번달 일정':
        case '이번달 일정':
        case '이번달일정':
            iscallback = 1;
            var dt = new Date();
            var alerm = '비어 있는 곳은 특별한 일정이 없는 날입니다'
            school.getCalendar().then(function (result) {
                var month_notice = ''
                for (var day = 1; day <= 31; day++) {
                    if (result[day]) {
                        month_notice += day + '일: ' + result[day] + ' \n'
                    }
                }
                //             console.log(month_notice)
                answer = month_notice
                addans = alerm
                buttons = ['메뉴 보기', '다른날 일정도 보기']
                buttoncore = ['메뉴 보기', '다른날 일정도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '한달 급식':
            iscallback = 1;
            var dt = new Date();
            var Alerge = ' \n식품 알러지가 있으신 분은"알러지"를 통해 확인해주세요' + ' \n\n비어있는곳은 급식이 없는 날 입니다';
            school.getMeal().then(function (result) {
                var month_meal = ''
                for (var day = 1; day <= 31; day++) {
                    if (result[day]) {
                        month_meal += day + '일: ' + result[day] + ' \n\n'
                    }
                    if (!month_meal) {
                        month_meal = '한달 동안 급식이 없습니다.'
                        Alerge = ''
                    }
                }
                //             console.log(month_meal)
                answer = '🍚한달 급식입니다!'
                addans = month_meal + Alerge
                buttons = ['메뉴 보기', '다른날 급식도 보기']
                buttoncore = ['메뉴 보기', '다른날 급식도 보기']
                var answerresult = [];
                answerresult.push(answer);
                answerresult.push(buttons);
                answerresult.push(link);
                answerresult.push(buttoncore);
                answerresult.push(addans);
                callback(answerresult);
            })
            break;
        case '문제점':
            answer = '문제점이 있군요! \n문제점은 https://open.kakao.com/o/s6aDxbmc 여기로 연락부탁드립니다!';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '안녕':
        case 'ㅎㅇ':
        case '보이루':
        case 'ㅂㅇㄹ':
            answer = '안녕하세용!';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '야':
        case '헤이':
        case '님':
            var hey = new Array();
            hey[0] = '넵';
            hey[1] = '네네';
            hey[2] = '네?';
            hey[3] = '왜요?';
            var randomtext = randomnum(0, 3);
            var a = hey[randomtext];
            console.log(a);
            answer = a;
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '알러지':
            answer = '알러지 정보 \n①난류,②우유,③메밀,④땅콩,⑤대두,⑥밀,⑦고등어,⑧게,⑨새우,⑩돼지고기,⑪복숭아,⑫토마토,⑬아황산염, ⑭호두 ⑮닭고기 \n?소고기 ?오징어 ?조개류(굴, 전복, 홍합 포함)';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '뭐해':
        case '머해':
        case 'ㅁㅎ':
        case '머하냐':
        case 'ㅁㅎ냐':
            answer = '당신과 얘기중이에요!';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '배고파':
            answer = '대신 급식 정보 알려드릴까요?';
            buttons = ['웅 알려줘', '아니 싫어']
            buttoncore = ['웅 알려줘', '아니 싫어']
            break;
        case '웅 알려줘':
            answer = '언제 급식정보를 알려드릴까요?'
            buttons = ['오늘 급식', '내일 급식', '어제 급식', '한달 급식']
            buttoncore = ['오늘 급식', '내일 급식', '어제 급식', '한달 급식']
            break;
        case '아니 싫어':
            answer = '네.. 알겠습니다'
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '급식':
        case '밥':
            answer = '언제 급식 정보를 원하시나요?'
            buttons = ['오늘 급식', '내일 급식', '어제 급식', '한달 급식']
            buttoncore = ['오늘 급식', '내일 급식', '어제 급식', '한달 급식']
            break;
        case '일정':
            answer = '언제 일정 정보를 원하시나요?';
            buttons = ['오늘 일정', '내일 일정', '모레 일정', '한달 일정']
            buttoncore = ['오늘 일정', '내일 일정', '한달 일정']
            break;
        case 'ㅋ':
            answer = 'ㅎㅎ';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '알았어':
        case 'ㅇㅋ':
            answer = '넹';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '이름이 머냐':
        case '이름':
            answer = '제 이름은 중앙고 챗봇!';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '개발자 정보':
            answer = makerstatement;
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '채팅이 안되면 눌러주세요!':
            console.log("해결했어요!");
            answer = '해결했어요!';
            break;
        case '말 추가하기':
        case '말추가하기':
            answer = addnewmentstatement;
            addans = '예시) \n마미손 이라고 하면 매드클라운 이라 해줘';
            break;
        case '한달':
            answer = '멀 말씀하시는 거죠? \n한달 급식 \n한달 일정';
            buttons = ['한달 급식', '한달 일정']
            buttoncore = ['한달 급식', '한달 일정']
            break;
        case '오늘':
            answer = '멀 말씀하시는 거죠? \n오늘 급식 \n오늘 일정';
            buttons = ['오늘 급식', '오늘 일정']
            buttoncore = ['오늘 급식', '오늘 일정']
            break;
        case '내일':
            answer = '멀 말씀하시는 거죠? \n내일 급식 \n내일 일정';
            buttons = ['내일 급식', '내일 일정']
            buttoncore = ['내일 급식', '내일 일정']
            break;
        case '모레':
            answer = '멀 말씀하시는 거죠? \n모레 급식 \n모레 일정';
            buttons = ['모레 급식', '모레 일정']
            buttoncore = ['모레 급식', '모레 일정']
            break;
        case '응':
            answer = '네!';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '어이':
            answer = '왜';
            break;
        case '짱':
            answer = '알고있죠 ㅎㅎ';
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '돌아가기':
            answer = returnstatement;
            buttons = ['메뉴']
            buttoncore = ['메뉴']
            break;
        case '주사위 정보':
            answer = '[주사위 정보] \n\n1.기본 주사위 \n\n2.주사위 게임';
            break;
        case '기본 주사위':
            var diceword = '주사위를 던져 ';
            if (Math.random() <= 0.5) {
                diceword = '주사위를 굴려 ';
            }
            if (Math.random() <= 0.4) {
                diceword = '주사위를 데구르르 굴려 ';
            }
            if (Math.random() <= 0.3) {
                diceword = '주사위를 던져서 ';
            }
            answer = diceword + randomnum(1, 6) + '이(가) 나왔습니다.';
            break;
        case '주사위 게임':
            answer = '1부터 6 사이의 수를 선택해주세요!';
            buttons = ['1', '2', '3', '4', '5', '6'];
            buttoncore = ['1 예측하기', '2 예측하기', '3 예측하기', '4 예측하기', '5 예측하기', '6 예측하기'];
            break;
        case '주사위 게임 N':
            var guessnum = msg.charAt(0);
            var dicenum = randomnum(1, 6);
            var eventnum = randomnum(1, 2)
            var eventmento = ''
            var mento;
            if (guessnum == dicenum) {
                mento = '축하합니다! 주사위가 예측하신대로 '
            } else {
                mento = '아쉽지만 주사위는'
            }
            answer = mento + dicenum + '이(가) 나왔어요' //+ ' \n\n' + eventmento;
            buttons = ['다른 게임 하로 가기', '메뉴']
            buttoncore = '다른 게임 하로 가기', '메뉴'
            break;
        case '베스킨라빈스 31':
            answer = '베스킨라빈스 31 시작합니다! \n1 2';
            buttoncore = ['(베스킨라빈스)3', '(베스킨라빈스)3 4', '(베스킨라빈스)3 4 5', '포기'];
            buttons = ['3', '3 4', '3 4 5', '포기'];
            addans = '밑에 있는 버튼을 눌러주세요!';
            break;
        case '베스킨라빈스 N':
            var recnum = 0;
            //8 10 12
            var msgnum = find_num(msg);
            recnum = msgnum[msgnum.length - 1];
            var ans = alwayswinbr(recnum);
            var mento = '';
            for (var i = recnum + 1; i < ans; i++) {
                mento += i + ' ';
            }
            mento += ans;
            var buttonarr = [];
            var sbuttonarr = [];
            if (ans + 3 < 31) {
                sbuttonarr.push(ans + 1);
                sbuttonarr.push((ans + 1) + ' ' + (ans + 2));
                sbuttonarr.push((ans + 1) + ' ' + (ans + 2) + ' ' + (ans + 3));
                sbuttonarr.push('포기');
                buttonarr.push('(베스킨라빈스)' + (ans + 1));
                buttonarr.push('(베스킨라빈스)' + (ans + 1) + ' ' + (ans + 2));
                buttonarr.push('(베스킨라빈스)' + (ans + 1) + ' ' + (ans + 2) + ' ' + (ans + 3));
                buttonarr.push('포기');
            }
            else if (ans + 2 < 31) {
                sbuttonarr.push(ans + 1);
                sbuttonarr.push((ans + 1) + ' ' + (ans + 2));
                sbuttonarr.push('포기');
                buttonarr.push('(베스킨라빈스)' + (ans + 1));
                buttonarr.push('(베스킨라빈스)' + (ans + 1) + ' ' + (ans + 2));
                buttonarr.push('포기');
            }
            else if (ans + 1 < 31) {
                sbuttonarr.push(ans + 1);
                sbuttonarr.push('포기');
                buttonarr.push('(베스킨라빈스)' + (ans + 1));
                buttonarr.push('포기');
            }
            else {
                sbuttonarr.push('포기');
                buttonarr.push('포기');
            }
            answer = mento;
            buttoncore = buttonarr;
            buttons = sbuttonarr;
            //addans = '밑에 있는 버튼을 눌러주세요!';
            break;
        case '포기':
            answer = '다음에 더 힘내서 다시 도전하세요!'
            buttons = ['메뉴 보기']
            buttoncore = ['메뉴 보기']
            break;
        case '지금 시간':
        case '지금시간':
            var dt = new Date();
            var a = dt.toString();
            answer = a
            break;
        case '게임':
            answer = '게임 종류들입니다!'
            buttons = ['주사위 게임', '베스킨 라빈스 31', '게임 추천해줘']
            buttoncore = ['주사위 게임', '베스킨 라빈스 31', '게임 추천해줘']
            break;
        case '게임 추천해줘':
            var gamenum = randomnum(1, 2);
            var game = '';
            if (gamenum == '1') {
                game = '베스킨라빈스 31'
            } else {
                game = '주사위 게임'
            }
            answer = '제가 추천하는 게임은' + ' ' + game + '입니다!';
            buttons = [game + ' 하로가기', '메뉴 보기']
            buttoncore = [game + ' 하로가기', '메뉴 보기']
            break;
        case '나가기':
            answer = returnstatement;
            break;
        //https://www.wolframalpha.com/input/?i=
        case '계산':
            //계산할 식 인지
            var calcarr = msg.split(' ');
            for (var i = 0; i < calcarr.length; i++) {
                if (calcarr[i].includes('계산')) {
                    calcarr[i] = '';
                }
            }
            var calcstr = '';
            for (var i = 0; i < calcarr.length; i++) {
                calcstr += calcarr[i];
                if (calcarr[i] != '') {
                    calcstr += ' ';
                }
                //console.log('2stagei='+i);
            }
            var calcmsg = calcstr;
            console.log('get calc: ' + calcstr);
            //+등의 기호를 약속된 기호로 변환
            for (var i = 0; i < calcstr.length; i++) {
                if (calcstr.charAt(i) == '+') {
                    calcstr = calcstr.slice(0, i) + '%2B' + calcstr.slice(i + 1, calcstr.length);
                    i += 2;
                }
                if (calcstr.charAt(i) == '=') {
                    calcstr = calcstr.slice(0, i) + '%3D' + calcstr.slice(i + 1, calcstr.length);
                    i += 2;
                }
                if (calcstr.charAt(i) == '/') {
                    calcstr = calcstr.slice(0, i) + '%2F' + calcstr.slice(i + 1, calcstr.length);
                    i += 2;
                }
                if (calcstr.charAt(i) == '^') {
                    calcstr = calcstr.slice(0, i) + '%5E' + calcstr.slice(i + 1, calcstr.length);
                    i += 2;
                }
                if (calcstr.charAt(i) == '%') {
                    calcstr = calcstr.slice(0, i) + '%25' + calcstr.slice(i + 1, calcstr.length);
                    i += 2;
                }
            }
            var calcurl = 'https://www.wolframalpha.com/input/?i=' + calcstr
            //url 전달
            answer = calcmsg + ' 을(를) 계산한 결과입니다.';
            link = calcurl;
            break;
        case 'addnewment//':
            console.log('get ment: ' + msg);
            var mentinput;
            var mentoutput;
            var mentres;
            var msgarr = msg.split('하면 ');
            console.log('\nmsgarr: ' + msgarr);
            if (msgarr.length == 2) {
                //1
                if (msgarr[0].charAt(msgarr[0].length - 1) == ' ') {
                    msgarr[0] = msgarr[0].slice(0, msgarr[0].length - 1);
                }
                if (msgarr[0].slice(msgarr[0].length - 3, msgarr[0].length) == '이라고') {
                    msgarr[0] = msgarr[0].slice(0, msgarr[0].length - 3);
                }
                else if (msgarr[0].slice(msgarr[0].length - 2, msgarr[0].length) == '라고') {
                    msgarr[0] = msgarr[0].slice(0, msgarr[0].length - 2);
                }
                else if (msgarr[0].slice(msgarr[0].length - 2, msgarr[0].length) == '이라') {
                    msgarr[0] = msgarr[0].slice(0, msgarr[0].length - 2);
                }
                else if (msgarr[0].slice(msgarr[0].length - 1, msgarr[0].length) == '라') {
                    msgarr[0] = msgarr[0].slice(0, msgarr[0].length - 1);
                }
                //2
                if (msgarr[1].slice(msgarr[1].length - 2, msgarr[1].length) == '해라') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 2);
                }
                else if (msgarr[1].slice(msgarr[1].length - 2, msgarr[1].length) == '해줘') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 2);
                }
                else if (msgarr[1].slice(msgarr[1].length - 2, msgarr[1].length) == '해') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 1);
                }
                if (msgarr[1].charAt(msgarr[1].length - 1) == ' ') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 1);
                }
                if (msgarr[1].slice(msgarr[1].length - 3, msgarr[1].length) == '이라고') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 3);
                }
                else if (msgarr[1].slice(msgarr[1].length - 2, msgarr[1].length) == '라고') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 2);
                }
                else if (msgarr[1].slice(msgarr[1].length - 2, msgarr[1].length) == '이라') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 2);
                }
                else if (msgarr[1].slice(msgarr[1].length - 1, msgarr[1].length) == '라') {
                    msgarr[1] = msgarr[1].slice(0, msgarr[1].length - 1);
                }
                mentinput = msgarr[0].trim();
                mentoutput = msgarr[1].trim();
                console.log('mentinput=_' + mentinput + '_');
                console.log('mentoutput=_' + mentoutput + '_');
                mentres = mentinput + ' 라고 말하시면 ' + mentoutput + ' 라고 답할께요!';
                if (mentsarr.length <= 5000) {
                    var mentwrite = fs.readFileSync('./ments/ments.txt', 'utf8') + ' \n' + mentinput + '=' + mentoutput;
                    fs.writeFileSync('./ments/ments.txt', mentwrite);
                }
                else {
                    mentres = '대답 목록이 이미 꽉 차버렸어요...'
                }
            }
            else {
                mentres = '죄송하지만 뭐라고 하는지 못 알아듣겠어요...';
            }
            answer = mentres;
            buttons = ['메뉴', '말 추가하기']
            buttoncore = ['메뉴', '말 추가하기']
            break;
        case '개발자에게 문의하기':
            answer = '오픈채팅방: https://open.kakao.com/o/s6aDxbmc \n\n건의사항이나 문제점은 위 오픈채팅방으로 통해서 알려주세요!'
            buttons = ['메뉴 보기', '급식 정보 보기']
            buttoncore = ['메뉴 보기', '급식 정보 보기']
            break;
        case '왜 이해못해?':
            answer = '너무 그러지 마세요...ㅠㅠ'
            addans = '추가하고 싶은 내용이 있으시면 [말추가하기]를 눌러주시고 \n\n궁금한점이 있으시면 사용법을 눌러주세요!\n\n잘못된점이 있으면 개발자에게 문의해주세요!'
            buttons = ['메뉴 보기', '말추가하기', '사용법', '개발자에게 문의하기']
            buttoncore = ['메뉴 보기', '말추가하기', '사용법', '개발자에게 문의하기'];
            break;
        default:
            var defret = '이해하기 어려워요 ㅠㅠ';
            for (var i = 0; i < mentsarr.length; i++) {
                //console.log('defreti='+i);
                var tmparr = mentsarr[i].split('=');
                //console.log('tmparr[0]=' + tmparr[0]);
                //console.log('tmparr[1]=' + tmparr[1]);
                //console.log('msg='+msg);
                //console.log(msg==tmparr[0]);
                if (msg == tmparr[0]) {
                    defret = tmparr[1];
                }
            }
            if (defret == '이해하기 어려워요 ㅠㅠ') {
                answer = defret;
                buttons = ['왜 이해못해?'];
                buttoncore = ['왜 이해못해?'];
            }
            else {
                answer = defret;
            }
            break;
    }
    if (iscallback == 0) {
        var answerresult = [];
        answerresult.push(answer);
        answerresult.push(buttons);
        answerresult.push(link);
        answerresult.push(buttoncore);
        answerresult.push(addans);
        callback(answerresult);
    }
}

var request = require('request');
const School = require('node-school-kr');
const school = new School();
school.init(School.Type.HIGH, School.Region.GYEONGGI, 'J100000590');//(중앙고는 J100000590)
var cheerio = require('cheerio');
var fs = require('fs');
var express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();
app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', apiRouter);

apiRouter.post('/test', function (req, res) {
    //console.log(req.body);
    var msg = req.body.userRequest.utterance;
    var userid = req.body.userRequest.user.id;
    var userlang = req.body.userRequest.lang;
    console.log(msg);

    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: msg
                    }
                }
            ]
        }
    };

    res.status(200).send(responseBody);
});

function add(a) {
    return function (b) {
        // console.log(v);
        return a + b;
    }
}

var inc3 = add(3);
var a = add(1);

apiRouter.post('/switch', function (req, res) {
    //console.log(req.body);
    var msg = req.body.userRequest.utterance;
    var userid = req.body.userRequest.user.id;
    id = userid;
    var userlang = req.body.userRequest.lang;
    var keyword = detectword(msg);
    console.log(msg);
    if (userid == '7f040c0d6890bf086333ac722bd436d1cbcbf5efb765623aa9ab4be4f773232aba') {
        fs.writeFileSync('./admin_psw/psw.txt', 'admin', 'utf8')
    } else {
        fs.writeFileSync('./admin_psw/psw.txt', makepsw(), 'utf8')
    }
    reactword(keyword, msg, reaction => {
        var answer = reaction[0];
        var buttons = reaction[1];
        var link = reaction[2];
        var buttoncore = reaction[3];
        var addans = reaction[4];
        console.log('answer:' + answer);


        var outputres = [];
        const tmpout1 = {
            simpleText: {
                text: answer
            }
        };
        outputres.push(tmpout1);
        if (addans != '') {
            const tmpout2 = {
                simpleText: {
                    text: addans
                }
            };
            outputres.push(tmpout2);
        }

        if (buttons.length == 0 && link == '') {
            const responseBody = {
                version: "2.0",
                template: {
                    outputs: outputres
                }
            };
            res.status(200).send(responseBody);
        }
        else if (link == '') {
            var buttonres = [];
            for (var i = 0; i < buttons.length; i++) {
                console.log(i + ' ' + buttons[i] + ' ' + buttoncore[i]);
                const tmpobj = {
                    label: buttons[i],
                    action: 'message',
                    messageText: buttoncore[i]
                }
                //console.log('\n'+tmpobj+'\n');
                buttonres.push(tmpobj);
            }
            //console.log('\n\nBUTRES\n' + buttonres);
            const responseBody = {
                version: "2.0",
                template: {
                    outputs: outputres,
                    quickReplies: buttonres
                }
            };
            res.status(200).send(responseBody);
        }
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('서버 실행중...');
});

