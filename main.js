/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num){
  return num > 5;
}

function topScore(score, topScore){
  return score > topScore
}

function isInDanger(grade){
 return grade >= 60 && grade <= 71;
}

function isCoasting(grade){
  return grade >= 72 && grade <=83;
}

function isSucceeding(num){
  return num >= 84 && num <= 92;
}

function isFailing(grade){
  return grade < 60;
}

function isAcing(grade){
  return grade > 92;
}

function isStudent(person){
  return person === 'student'
}

function isTeacher(person){
  return person === 'teacher'
}

function isAdmin(person){
  return person === 'admin'
}

function isElementary(person){
  return person === 'elementary'
}

function areDifferentPeople(one, two){
  return one != two
}

function isMiddleSchoolTeacher(role, grade){
  return  role === 'teacher' && grade >= 6 && grade <= 8;
}

function notAnElementarySchoolAdministrator(level, role) {
return level !== 'elementary' || role !== 'admin'
}



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  isMiddleSchoolTeacher,
  notAnElementarySchoolAdministrator,
}
