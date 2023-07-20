import React from "react";
import {GiRat} from "react-icons/gi"

export const HoroscopeByDateOfBirth = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="tracking-wider leading-loose px-9 text-center text-2xl">
          វិធីទស្សន៏ទាយរកគូព្រេងតាមរយៈថ្ងៃខែឆ្នាំកំណើត
        </h1>
        <div className="flex flex-wrap justify-center font-battambang">
          <select className="selection select w-fit">
            <option disabled selected>
              ថ្ងៃកំណើត
            </option>
            <option value={1}> ថ្ងៃអាទិត្យ</option>
            <option value={2}>ថ្ងៃចន្ទ</option>
            <option value={3}>ថ្ងៃអង្គារ</option>
            <option value={4}>ថ្ងៃពុធ</option>
            <option value={5}>ថ្ងៃព្រហសត្បិ៏</option>
            <option value={6}>ថ្ងៃសុក្រ</option>
            <option value={7}>ថ្ងៃសៅរ៏</option>
          </select>
          <select className="selection select w-fit">
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
          <select className="selection select w-40">
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
        <button>ទស្សន៍ទាយ</button>
      </div>
    </div>
  );
};
