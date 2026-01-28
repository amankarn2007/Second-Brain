

export function randomString(len: number) {
    let options = "lskadflwej848h92h92fjsd24";
    const length = options.length;

    let ans = "";

    for(let i = 0; i < len; i++){
        ans += options[Math.floor(Math.random() * length)]; // 0 => 25
    }

    return ans;
}