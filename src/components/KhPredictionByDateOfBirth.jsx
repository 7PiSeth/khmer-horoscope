import React, { useState } from "react";
import topleft from "../assets/images/position/top-left.png"
import topright from "../assets/images/position/top-right.png"
import bottoomleft from "../assets/images/position/bottom-left.png"
import bottomright from "../assets/images/position/bottom-right.png"
import khframe from "../assets/images/position/khframe.png"
const resultArr = [
  "គូរព្រេងរបស់លោកអ្នក ជាមនុស្សនិស្ស័យក៏ល្អ ឋានៈក៏ល្អ ជាមនុស្សម៉ាត់ណាម៉ាត់ហ្នឹង ចូលចិត្តរាប់អានមិត្ត ចូលចិត្តចូលរួមសង្គម មានចិត្តមានៈតែអត់ធ្មត់។ គេជាមនុស្សដែលត្រូវការឲ្យអ្នកដទៃមកយកចិត្ត និងចូលចិត្តដើរលេងកំសាន្តគ្រប់ទីកន្លែង។ ពេលខ្លះ គេធ្វើរូមែនទិចណាស់។ តែសូមប្រយ័ត្នបន្តិច! ព្រោះគេជាមនុស្សព្រានសម្បើមណាស់។"
  ,
  "គេជាមនុស្សសម្បុរស និងជាមនុស្សមានរបៀប។ គេជាមនុស្សមានឧត្តមគតិ ហើយចង់ឲ្យអ្នកជាមនុស្សមានរបៀបរៀបរយ។ ដូចនេះ លោកអ្នកត្រូវធ្វើតាមចិត្តគេ។ បើធ្វើឲ្យគេទើសចិត្តពេលណានោះ គេអាចនឹងមិនសប្បាយចិត្តនឹងលោកអ្នកបាន។ គូព្រេងរបស់លោកអ្នកម្នាក់នោះ គឺជាមនុស្សស្នេហ៏ស្មោះ។ បើសិនជាគេដាក់ចិត្តស្រឡាញ់ហើយ គេប្រាដកជារៀបការនឹងលោកអ្នកមិនខាន។"
  ,
  "គេជាជំពូកមនុស្សមិនប្រកាន់ខ្លួន មានសម្បុរពីពណ៌ ជាមនុស្សសប្បាយរីករាយ មានរបៀបរបប ហើយជាមនុស្សស្មោះ។ គេជាមនុស្សចូលចិត្តធ្វើតាមចិត្តអ្នកដទៃ មាននិស្ស័យល្អ ចិត្តល្អ ហើយជាទីចូលចិត្តរបស់អ្នកផងទាំងពួង។គេងអាចជាមនុស្សព្រានបន្តិច តែនៅពេលស្រឡាញ់អ្នកណាហើយ គឺស្រឡាញ់អ្នកនោះតែម្តង គ្មានចិត្តវៀចវេនោះទេ។"
  ,
  "គូព្រេងរបស់លោកអ្នក ជាមនុស្សសប្បុរស-លឿង មានមន្តស្នេហ៏ក្នុងការនិយាយស្តី និងមានទំនុកចិត្តលើខ្លួនឯងខ្ពស់។ សំរាប់រឿងគ្រប់យ៉ាង គេនឹងរៀបចំឲ្យលោកអ្នកជាស្រេច។ គេជាមនុស្សមានមិត្តភក្តិច្រើន ហើយគេម្នាក់នេះ ច្រើនមានតួនាទីជាប្រធានក្រុម និងមានឥទ្ធិពលអាចបង្គាប់បញ្ជាឲ្យអ្នកផ្សេងធ្វើតាមបាន។ គេជាមនុស្សដែលជាទីចូលចិត្តរបស់អ្នកផងទាំងពួង។"
  ,
  "គូព្រេងរបស់លោកអ្នក គឺជាមនុស្សសប្បាយរីករាយ កំប្លែង មិនប្រកាន់ខ្លួន ពួកែនិយាយស្តី មិនចូលចិត្តឲ្យអ្នកផ្សេងបង្គាប់បញ្ជា ហើយចូលចិត្តធ្វើតាមអ្វីដែលខ្លួនឯងគិតថាត្រូវ។ បើសិនជាគេតាំងចិត្ត ថាធ្វើអ្វីមួយហើយនោះ គេនឹងធ្វើវាឲ្យទាល់តែបានសំរេច។ មានពេលខ្លះ គេអាចនឹងទន់ជ្រាយបន្តិច តែជាមនុស្សមានជំនឿខ្ពស់។ គេអាចរាប់បានថាជាមនុស្សដែលគួរឲ្យស្រឡាញ់ម្នាក់ដែរ។"
  ,
  "គេជាមនុស្សដែលមានសម្បុរស ជាមនុស្សទឹកចិត្តល្អ សប្បាយរីករាយនឹងការនិយាយស្តី ជាមនុស្សទន់ភ្លន់ ហើយជាមនុស្សដែលពូកែប្រច័ណ្ឌ។ គេជាមនុស្សដែលពិបាកនឹងទស្សន៏ទាយចិត្តគំនិតណាស់។ គេជាមនុស្សដែលចូលចិត្តនិយាយត្រង់ទៅត្រង់មក។ ពេលខ្លះ គេអាចធ្វើខ្លួនគួរឲ្យស្រឡាញ់ និងជាមនុស្សដែលមានអារម្មណ៏ល្អ ហើយថែមទាំងសម្តីផ្អែមទៀតផង។"
  ,
  "គូរបស់លោកអ្នក ជាមនុស្សសម្បុរស ហើយមាននិស្ស័យល្អ។ គ្រប់យ៉ាងដែលលោកអ្នកចូលចិត្ត គេក៏ចូលចិត្តដែរ។ គេនឹងធ្វើតាមចិត្តលោកអ្នកជានិច្ច។ គេជាមនុស្សដែលចូលចំណោមគេចុះ ជាមនុស្សចូលចិត្តនិយាយស្តីមានមន្តស្នេហ៏ និងមានចិត្តចង់ឲ្យអ្នកដែលនៅក្បែរមានសេចក្តីសុខ។ ហេតុនេះហើយ ទើបគេក្លាយជាមនុស្សដែលអ្នកដទៃស្រឡាញ់ចូលចិត្ត។"
  ,
  "គេគឺជាមនុស្សមាននិស្ស័យទន់ភ្លន់ ស្មោះត្រង់នឹងស្នេហា មិនចូលចិត្តនៅមួយកន្លែង ហើយចូលចិត្តសប្បាយរីករាយ។ គេមិនចូលចិត្តឲ្យអ្នកផ្សេងបង្គាប់បញ្ជាឲ្យធ្វើនេះធ្វើនោះ និងជាមនុស្សឆាប់មានអារម្មណ៏ទន់ជ្រាយ។ ជួនកាល គេអាចជាមនុស្សស្ងប់ស្ងាត់ និងចូលចិត្តនៅកន្លែងស្ងាត់ម្នាក់ឯង។ គេជាមនុស្សដែលពូកែច្នៃប្រឌិត ហើយចូលចិត្តធ្វើអ្វីដោយខ្លួនឯង និងមិនចូលចិត្តពឹងពាក់អ្នកដទៃ។"
  ,
  "គេជាមនុស្សចូលចិត្តយកចិត្តអ្នកដទៃ និងចូលចិត្តទីដែលមានមនុស្សច្រើន។ គេនឹងមានភាពរីករាយនៅពេល ដែលបាននិយាយជាមួយអ្នកដទៃ។ គេចូលចិត្តធ្វើអ្វីដែលងាយៗ ស្លៀកពាក់សប្បាយៗ និងជាមនុស្សបើកចំហរ។ គេជាមនុស្សមិនចូលចិត្តលាក់រឿងសម្ងាត់ ហើយជាមនុស្សដែលស្មោះត្រង់នឹងរឿង ស្នេហា តែពូកែប្រច័ណ្ឌលេខមួយ។ គេនឹងថា្នក់ថ្នមលោកអ្នកបានយ៉ាងល្អ ហើយនឹងមិនឲ្យអ្នកណាម្នាក់មករញ៉េរញៃជាមួយលោកអ្នកបានឡើយ។"
  ,
  "គូព្រេងរបស់លោកអ្នក ជាមនុស្សមានសម្បុរស ជាមនុស្សម្នាក់ស្ងប់ស្ងាត់ចូលចិត្តគិតអ្វីដែលមិនដូចគេ និងមិនសូវខ្វល់ពីការគិតឃើញរបស់អ្នកផ្សេងឡើយ។ គេចូលចិត្តធ្វើខ្លួនជាអ្នកដឹកនាំ ហើយមានចរិករាងផ្តាច់ ការបន្តិចចូលចិត្តអង្គុយស្រមៃគិតអ្វីតែម្នាក់ឯង ព្រោះជាមនុស្សស្ងប់ស្ងៀមស្រាប់ទៅហើយ៕ "
  ,
  "ទស្សន៏ទាយគូរព្រេងរបស់លោកអ្នក តាមរយៈថ្ងៃខែឆ្នាំកំណើត។ លោកអ្នកអាចទាយដឹងថាគូរព្រេង របស់លោកអ្នកជាមនុស្សរបៀបណា អត្តចរិតយ៉ាងដូចម្តេចបានដោយគ្រាន់តែ ធ្វើការជ្រើសរើសថ្ងៃ... ខែ... ឆ្នាំកំណើតរបស់មនុស្សដែលអ្នកស្រឡាញ់ កម្មវីធីនឹងធ្វើការទស្សន៍ទាយសំរាប់លោកអ្នក៕"
]

export const KhPredictionByDateOfBirth = () => {
  const [result, setResult] = useState(10)
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="font-moul tracking-wider leading-loose text-center text-2xl">
        ទស្សន៍ទាយគូព្រេងតាមរយៈថ្ងៃខែឆ្នាំកំណើត
        </h1>
        <div className="flex flex-wrap justify-center font-battambang">
          <select id="selectDay" className="selection select w-fit">
            <option disabled selected>
              ថ្ងៃកំណើត
            </option>
            <option value={1}>ថ្ងៃអាទិត្យ</option>
            <option value={2}>ថ្ងៃចន្ទ</option>
            <option value={3}>ថ្ងៃអង្គារ</option>
            <option value={4}>ថ្ងៃពុធ</option>
            <option value={5}>ថ្ងៃព្រហសត្បិ៏</option>
            <option value={6}>ថ្ងៃសុក្រ</option>
            <option value={7}>ថ្ងៃសៅរ៏</option>
          </select>
          <select id="selectMonth" className="selection select w-fit">
            <option disabled selected>
              ខែកំណើត
            </option>
            <option value={1}>ខែមករា</option>
            <option value={2}>ខែកុម្ភៈ</option>
            <option value={3}>ខែមិនា</option>
            <option value={4}>ខែមេសា</option>
            <option value={5}>ខែឧសភា</option>
            <option value={6}>ខែមិថុនា</option>
            <option value={7}>ខែកក្កដា</option>
            <option value={8}>ខែសីហា</option>
            <option value={9}>ខែកញ្ញា</option>
            <option value={10}>ខែតុលា</option>
            <option value={11}>ខែវិច្ឆិកា</option>
            <option value={12}>ខែធ្នូ</option>
          </select>
          <select id="selectZodiac" className="selection select w-40">
            <option disabled selected>
              ឆ្នាំកំណើត
            </option>
            <option value={1}>ឆ្នាំជូត</option>
            <option value={2}>ឆ្នាំឆ្លូវ</option>
            <option value={3}>ឆ្នាំខាល</option>
            <option value={4}>ឆ្នាំថោះ</option>
            <option value={5}>ឆ្នាំរោង</option>
            <option value={6}>ឆ្នាំម្សាញ់</option>
            <option value={7}>ឆ្នាំមមី</option>
            <option value={8}>ឆ្នាំមមែ</option>
            <option value={9}>ឆ្នាំវក</option>
            <option value={10}>ឆ្នាំរការ</option>
            <option value={11}>ឆ្នាំច</option>
            <option value={12}>ឆ្នាំកុរ</option>
          </select>
        </div>
        <button className="m-3" onClick={() => {
          var calculatedValue = 10;
          var selectedDay = document.getElementById("selectDay").value;
          var selectedMonth = document.getElementById("selectMonth").value;
          var selectedZodiac = document.getElementById("selectZodiac").value;
          var resultStr = (parseInt(selectedDay) + parseInt(selectedMonth) + parseInt(selectedZodiac)) + '';
          calculatedValue = parseInt(resultStr)
          if (resultStr.length === 2) {
            calculatedValue = parseInt(resultStr[0]) + parseInt(resultStr[1]);
          }
          setResult(calculatedValue)
        }}>ទស្សន៍ទាយ</button>
        <div className="px-8 sm:min-h-[450px] min-h-[350px] max-w-screen-sm relative flex items-center">
          <img className={`absolute top-0 left-0 w-full`} src={khframe} alt="" />
          <p className="font-battambang text-xl leading-relaxed 
          indent-10 tracking-wide">{resultArr[result]}</p>
        </div>
      </div>
    </div>
  );
};
