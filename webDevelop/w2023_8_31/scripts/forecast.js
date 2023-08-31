const key = "MLybLTMWTQT1CQpoL48p8NhYpXBiPlP1";

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  //   const arrayData = data[0];
  //   console.log(data.Temperature);
  //   console.log(arrayData.Temperature);

  console.log(data[0]);
  return data[0];
};

// 도시정보 가져오기
// apple.com / kr / seoul
// apple.com / kr / busan
// apple.com / kr / busan / sumyun /
// apple.com / kr / restaurant / sumyun /
// apple.com / kr / busan?restaurant=true&location='서면' => query parameter

// res.query.restaurant =

const getcity = async (city) => {
  // http://dataservice.accuweather.com/locations/v1/cities/search?apikey=MLybLTMWTQT1CQpoL48p8NhYpXBiPlP1&q=seoul
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  //   console.log(data[0]);
  return data[0];
};

/*
getcity("newyork")
  .then((data) => {
    console.log(data.Key);
    return getWeather(data.Key);
  })
  .catch((err) => console.log(err));
  */
