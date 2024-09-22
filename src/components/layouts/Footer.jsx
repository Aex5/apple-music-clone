function Footer() {
  const language = [
    {
      name: "United States",
    },
    {
      name: "Español (México)"
    },
    {
      name: "العربية"
    },
    {
      name: "Русский"
    },
    {
      name: "Français (France)"
    },
    {
      name: "한국어"
    },
    {
      name: "Português (Brasil)"
    },
    {
      name: "Tiếng Việt"
    },
    {
      name: "繁體中文 (台灣)"
    }
  ]

  const services = [
    {
      name: "internet services",
    },
    {
      name: "Apple Music & privacy"
    },
    {
      name: "cookie warning"
    },
    {
      name: "support"
    },
    {
      name: "feedback"
    }
  ]
  return (
    <div className="bg-[#323232] px-10 pt-5 pb-3 text-white">
      <div className="flex gap-3">
        {
          language.map((item, index) => (
            <div className="flex items-center gap-3 text-[#B5B5B5] tracking-wide">
              <p key={index} className="text-xs">{item.name}</p>
              <span className="text-[#626262]">|</span>
            </div>
          ))
        }
      </div>

      {/* copyrights */}
      <div className="mt-5 text-[#B5B5B5] text-xs flex gap-1">
        <p>Copyright © 2024</p>  
        <p className="text-[#EEEEEE]">Apple Inc.</p>
        <p>All rights reserved.</p>
      </div>

      {/* services */}
      <div className="flex gap-3 mt-1">
        {
          services.map((item, index) => (
            <div className="flex items-center gap-3 text-[#EEEEEE] tracking-wide capitalize">
              <p key={index} className="text-xs">{item.name}</p>
              <span className="text-[#626262]">|</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Footer;
