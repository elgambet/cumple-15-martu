const saveURL =
  "https://script.google.com/macros/s/AKfycbzkPu9mFosYhPNC_G9bHt9Jzn7LSEXXK24e9hQqY42o8bQZ6eRzmiYFHuUVzCttC9HtIA/exec";

const getURL =
  "https://script.google.com/macros/s/AKfycbzkPu9mFosYhPNC_G9bHt9Jzn7LSEXXK24e9hQqY42o8bQZ6eRzmiYFHuUVzCttC9HtIA/exec";

// Update data in the Google Spreadsheet
export async function updateGoogleSpreadsheet(data: Post[]) {
  try {
    const response = await fetch(saveURL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.debug("res: ", res, ", response: ", response);
    if (!res || !res.success) {
      throw new Error("invalid response");
    }
    return true;
  } catch (error) {
    console.error("Error updating data:", error);
  }
  return false;
}

export async function fetchDataFromGoogleAppsScript(): Promise<Post[]> {
  try {
    const response = await fetch(getURL);
    const data = await response.json();
    const returnData = Array.isArray(data)
      ? data.filter(isPost)
      : ([] as Post[]);
    return returnData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return [] as Post[];
}

function isPost(el: any): el is Post {
  return (
    isOptionalBoolean(el.asiste) &&
    isOptionalBoolean(el.celiaco) &&
    isOptionalBoolean(el.vegetariano) &&
    !isNaN(el.familia) &&
    typeof el.nombre === "string"
  );
}

function isOptionalBoolean(data: any): data is "" | "si" | "no" {
  return typeof data === "string" && (!data || ["si", "no"].includes(data));
}
