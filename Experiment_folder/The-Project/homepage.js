const swingRadio = document.getElementById("swing-radio");
const templeRadio = document.getElementById("temple-radio");
const floatingRadio = document.getElementById("floating-radio");
const destinationName = document.getElementById("destination-name");
const destinationDescription = document.getElementById("destination-description");
const destinationImage = document.getElementById("destination-image");
swingRadio.onclick = function(){
	destinationName.textContent = "เสาชิงช้า";
	destinationDescription.textContent = "เสาชิงช้า เป็นสถาปัตยกรรมที่สร้างขึ้นเพื่อใช้ประกอบพิธีโล้ชิงช้า ในพระราชพิธีตรียัมปวายของศาสนาพราหมณ์-ฮินดู โดยทั่วไปหมายถึงเสาชิงช้าที่ตั้งอยู่หน้าพระราชพิธีตรียัมปวาย และหน้าลานคนเมืองหน้าศาลาว่าการกรุงเทพมหานครแห่งที่ 1 ใกล้กับเทวสถานโบสถ์พราหมณ์ ในพื้นที่แขวงเสาชิงช้า เขตพระนคร กรุงเทพมหานคร ซึ่งถือเป็นภูมิสัญลักษณ์อย่างหนึ่งของกรุงเทพมหานคร แม้พิธีโล้ชิงช้าได้เลิกไปแล้วตั้งแต่สมัย พระบาทสมเด็จพระปกเกล้าเจ้าอยู่หัว รัชกาลที่ 7 ก็ตาม";
	destinationImage.src = "./Images/Giant-Swing3.webp";
}
templeRadio.onclick = function(){
	destinationName.textContent = "วัดพระแก้ว";
	destinationDescription.textContent = "วัดพระศรีรัตนศาสดาราม หรือที่เรียกกันทั่วไปว่า วัดพระแก้ว เป็นวัดภายในพระบรมมหาราชวัง ลักษณะเดียวกับวัดพระศรีสรรเพชญ์ในพระราชวังโบราณสมัยกรุงศรีอยุธยา ปัจจุบันอยู่ภายใต้การดูแลของสำนักพระราชวัง ผ่านสำนักงานวัดพระศรีรัตนศาสดาราม ที่เปลี่ยนชื่อจากสำนักงานพระคลังข้างที่ หลังจากโอนกิจการที่เกี่ยวกับทรัพย์สินพระมหากษัตริย์ไปยังสำนักงานพระคลังข้างที่แล้ว";
	destinationImage.src = "./Images/Temple1.jpeg";
}
floatingRadio.onclick = function(){
	destinationName.textContent = "ตลาดน้ำตลิ่งชัน";
	destinationDescription.textContent = "ตลาดน้ำตลิ่งชัน ตั้งอยู่บริเวณหน้าสำนักงานเขตตลิ่งชัน เปิดดำเนินการในวันเสาร์-อาทิตย์ เวลา 07.00-17.00 น. มีสินค้ามากมายจัดจำหน่าย โดยช่วงแรกของทางเข้ามีไม้ดอกไม้ประดับจำหน่าย ถัดมาจะเป็นร้านขายขนมไทยและอาหารของฝาก ภายในตลาดนั้นได้มีการจัดทำเรือนแพลอยน้ำ ให้นักท่องเที่ยวได้ซื้ออาหารจากพ่อค้าแม่เค้าที่ขายบนเรือมานั่งรับประทานบนแพ และมีบริการเรือนำเที่ยวพาไปยังสถานที่ท่องเที่ยวใกล้เคียง เช่น วัดปากน้ำภาษีเจริญ โดยซื้อตั๋วได้บนฝั่ง";
	destinationImage.src = "./Images/Float1.jpeg";
};

