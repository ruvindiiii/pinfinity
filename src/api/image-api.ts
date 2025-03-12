export type ImageShape = {
  url: string;
  id: number;
};

export const getImages = async (searchWord: string): Promise<ImageShape[]> => {
  let url = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=80`;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "vEnvq0c4WmWsdTZouQQ2WYfSgbmU88wD8KrbxZ31zNAAo0mGY4m7SEYi",
    },
  });
  let result = await response.json();
  console.log(result);
  let imageArr = result.photos.map((resObj: any) => {
    return {
      url: resObj.src.medium,
      id: resObj.id,
    };
  });
  return imageArr;
};
