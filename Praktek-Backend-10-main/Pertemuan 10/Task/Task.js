
 const showDownload = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Download Berhasil");
        }, 3000);
    });
};

const result = "Windows-10.exe";
const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Results Download : " + result);
        }, 3000);
    });
};

// consuning async-await
const main = async () => {
    console.log(await showDownload());
    console.log(await download());
}

main();