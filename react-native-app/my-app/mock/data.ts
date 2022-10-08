export interface IQuestionsAnswers {
  id: number;
  title: string;
}

export interface IQuestions {
  id: number;
  title: string;
  answers: IQuestionsAnswers[];
  correctAnswer: number;
}

const questions: IQuestions[] = [
  {
    id: 1,
    title: 'ซอฟต์แวร์ คือ',
    answers: [
      { id: 1, title: 'โปรแกรมชุดของคำสั่งที่ควบคุมการทำงานของคอมพิวเตอร์' },
      { id: 2, title: 'อุปกรณ์เทคโนโลยีระดับสูงc' },
      { id: 3, title: 'โปรแกรมแก้ปัญหาทุกอย่างของมนุษย์' },
      { id: 4, title: 'อุปกรณ์ที่ทำหน้าเสมือนสมองกล' },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    title: 'ข้อใดไม่ใช่ระบบปฏิบัติการ',
    answers: [
      { id: 1, title: 'ระบบปฏิบัติการดอส' },
      { id: 2, title: 'ระบบปฏิบัติการไมโครซอฟท์เวิร์ด' },
      { id: 3, title: 'ระบบปฏิบัติการไมโครซอฟต์วินโดวส์' },
      { id: 4, title: 'ระบบปฏิบัติการ แอนดรอยด์' },
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    title: 'ชนิดของซอฟต์แวร์ (software) มีทั้งหมดกี่ชนิด',
    answers: [
      { id: 1, title: 'มี 1 ชนิด 1.ซอฟต์แวร์ระบบ' },
      { id: 2, title: 'มี 2 ชนิด 1.ซอฟต์แวร์ระบบ 2.ซอฟต์แวร์ประยุกต์' },
      { id: 3, title: 'มี 3 ชนิด 1.ซอฟต์แวร์ระบบ 2.ซอฟต์แวร์ ประยุกต์ 3.ซอฟต์แวร์บุคคล' },
      { id: 4, title: 'มี 4 ชนิด 1.ซอฟต์แวร์ระบบ 2.ซอฟต์แวร์ประยุกต์ 3.ซอฟต์แวร์บุคคล 4. ซอฟต์แวร์ บริหาร' },
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    title: 'ซอฟต์แวร์ประมวลคำ คือข้อใด',
    answers: [
      { id: 1, title: 'word processing software' },
      { id: 2, title: 'spreadsheet software' },
      { id: 3, title: 'database management software' },
      { id: 4, title: 'presentation software' },
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    title: 'ซอฟต์แวร์ตารางทำงาน',
    answers: [
      { id: 1, title: 'word processing software' },
      { id: 2, title: 'spreadsheet software' },
      { id: 3, title: 'database management software' },
      { id: 4, title: 'presentation software' },
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    title: 'ซอฟต์แวร์จัดการฐานข้อมูล',
    answers: [
      { id: 1, title: 'word processing software' },
      { id: 2, title: 'spreadsheet software' },
      { id: 3, title: 'database management software' },
      { id: 4, title: 'presentation software' },
    ],
    correctAnswer: 3,
  },
  {
    id: 7,
    title: 'ซอฟต์แวร์นำเสนอ',
    answers: [
      { id: 1, title: 'word processing software' },
      { id: 2, title: 'spreadsheet software' },
      { id: 3, title: 'database management software' },
      { id: 4, title: 'presentation software' },
    ],
    correctAnswer: 4,
  },
  {
    id: 8,
    title: 'ซอฟต์แวร์สื่อสาร',
    answers: [
      { id: 1, title: 'word processing software' },
      { id: 2, title: 'spreadsheet software' },
      { id: 3, title: 'database management software' },
      { id: 4, title: 'communication software' },
    ],
    correctAnswer: 4,
  },
  {
    id: 9,
    title: 'ซอฟต์แวร์นำเสนอ คือข้อใด',
    answers: [
      { id: 1, title: 'Microsoft Excel' },
      { id: 2, title: 'Microsoft Access' },
      { id: 3, title: 'Microsoft Outlook' },
      { id: 4, title: 'Microsoft PowerPoint' },
    ],
    correctAnswer: 4,
  },
  {
    id: 10,
    title: 'โปรแกรมวินโดวส์ เป็นซอฟต์แวร์ประเภทใด',
    answers: [
      { id: 1, title: 'ซอฟต์แวร์ระบบ' },
      { id: 2, title: 'ซอฟต์แวร์ประยุกต์' },
      { id: 3, title: 'ซอฟต์แวร์สำเร็จ' },
      { id: 4, title: 'ซอฟต์แวร์ที่พัฒนาขึ้นใช้งานเฉพาะ' },
    ],
    correctAnswer: 3,
  },
  {
    id: 11,
    title: 'โปรแกรมเชื่อมต่อกับเครือข่ายอินเทอร์เน็ต คือโปรแกรมใด',
    answers: [
      { id: 1, title: 'Microsoft Word' },
      { id: 2, title: 'Internet Explorer' },
      { id: 3, title: 'Google Chrome' },
      { id: 4, title: 'ถูกทั้ง ข และ ค' },
    ],
    correctAnswer: 4,
  },
  {
    id: 12,
    title: 'ข้อใดคือ URL เว็บไซต์ครูเชียงราย',
    answers: [
      { id: 1, title: 'www.kruchiangrai.ac.th' },
      { id: 2, title: 'www.kruchiangrai.co.th' },
      { id: 3, title: 'www.kruchiangrai.net' },
      { id: 4, title: 'www.kruchiangrai.com' },
    ],
    correctAnswer: 3,
  },
  {
    id: 13,
    title: 'นักเรียนได้รับประโยชน์จากการใช้งานคอมพิวเตอร์ในด้านใดมากที่สุด',
    answers: [
      { id: 1, title: 'ด้านการศึกษา ด้านความรู้ ด้านการใช้งาน' },
      { id: 2, title: 'ด้านการเงิน / การธนาคาร' },
      { id: 3, title: 'ด้านความบันเทิง' },
      { id: 4, title: 'ด้านสุขภาพและการออกกำลังกาย' },
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    title: 'ข้อใดคือความหมายของ ฮาร์ดแวร์',
    answers: [
      { id: 1, title: 'โปรแกรมที่สั่งให้คอมพิวเตอร์ทำงาน' },
      { id: 2, title: 'ส่วนประกอบของเครื่องคอมพิวเตอร์' },
      { id: 3, title: 'ขั้นตอนในการปฏิบัติงาน' },
      { id: 4, title: 'บุคลากรที่ทำงานกับคอมพิวเตอร์' },
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    title: 'ข้อใด คือ ฮาร์ดแวร์',
    answers: [
      { id: 1, title: 'เกมคอมพิวเตอร์' },
      { id: 2, title: 'เมาส์' },
      { id: 3, title: 'แป้นพิมพ์' },
      { id: 4, title: 'ถูกทั้ง ข และ ค' },
    ],
    correctAnswer: 4,
  },
  {
    id: 16,
    title: 'ข้อใด คือระบบปฏิบัติการ',
    answers: [
      { id: 1, title: 'Microsoft Windows 7' },
      { id: 2, title: 'Microsoft Windows 8' },
      { id: 3, title: 'Microsoft Windows XP' },
      { id: 4, title: 'ถูกทุกข้อ' },
    ],
    correctAnswer: 4,
  },
  {
    id: 17,
    title: 'ข้อใด ไม่ใช่ระบบปฏิบัติการ',
    answers: [
      { id: 1, title: 'Android' },
      { id: 2, title: 'Linux' },
      { id: 3, title: 'Windows Mobile' },
      { id: 4, title: 'ถูกทุกข้อ' },
    ],
    correctAnswer: 4,
  },
  {
    id: 18,
    title: 'ผู้ก่อตั้งและผู้สร้างFacebook.com คือใคร',
    answers: [
      { id: 1, title: 'ฟาร์ค ซัคเกอร์เบิร์ก' },
      { id: 2, title: 'มาร์ค คาลเบิร์ก' },
      { id: 3, title: 'มาร์ค ซัคเกอร์เบิร์ก' },
      { id: 4, title: 'มาร์ค คาลเบิร์ก' },
    ],
    correctAnswer: 3,
  },
  {
    id: 19,
    title: 'โปรแกรมเชื่อมต่อกับเครือข่ายอินเทอร์เน็ต คือโปรแกรมใด',
    answers: [
      { id: 1, title: 'Microsoft Word' },
      { id: 2, title: 'Internet Explorer' },
      { id: 3, title: 'Google Chrome' },
      { id: 4, title: 'ถูกทั้ง ข และ ค' },
    ],
    correctAnswer: 4,
  },
  {
    id: 20,
    title: 'นักเรียนได้รับประโยชน์จากการใช้งานคอมพิวเตอร์ในด้านใดมากที่สุด',
    answers: [
      { id: 1, title: 'ด้านการศึกษา ด้านความรู้ ด้านการใช้งาน' },
      { id: 2, title: 'ด้านการเงิน / การธนาคาร' },
      { id: 3, title: 'ด้านความบันเทิง' },
      { id: 4, title: 'ด้านสุขภาพและการออกกำลังกาย' },
    ],
    correctAnswer: 1,
  },
];

export default questions;
