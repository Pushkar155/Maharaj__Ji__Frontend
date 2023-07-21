import React from 'react';
import "./button.css";
import "./eventscard.css";
import { useState } from 'react';

const Addbuttons = ({text}) => {
    const [isParagraphVisible, setIsParagraphVisible] = useState(false);

    const handleShowParagraph = () => {
      setIsParagraphVisible(!isParagraphVisible);
    };
  return (
    <div className='buttons'>
    <button className='button-50' onClick={handleShowParagraph}>
      {isParagraphVisible ? 'हटाए' : 'संस्कृति जाने'}
    </button>
    {isParagraphVisible && (
      <p>
        {text}
        {/* यज्ञ, भारतीय संस्कृति में एक प्राचीन धार्मिक अनुष्ठान है, जिसे अनेक हवन और अग्नि कुंड द्वारा किए जाने वाले विशेष रूप से आयोजित कर्मों की संस्कृति कहा जाता है। यज्ञ समाज में समानता, शुद्धि, उत्तेजना और ईश्वरीय आशीर्वाद की प्रतीकता के रूप में विशिष्ट माना जाता है। यह वैदिक काल से ही प्रचलित है और वैदिक साहित्य में यज्ञों का विस्तृत वर्णन पाया जाता है। यज्ञ के माध्यम से समाज को संरक्षण, शक्ति, सुख और सामाजिक समृद्धि की प्राप्ति होती थी। वर्तमान समय में भी यज्ञों का महत्व हिन्दू धर्म में अध्यात्मिक एवं सामाजिक दृष्टिकोन से है। */}
      </p>
    )}
  </div>
  )
}

export default Addbuttons