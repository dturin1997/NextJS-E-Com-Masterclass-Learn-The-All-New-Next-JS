//useState<string>('')
const func = <T>(args: T) => {
  return args;
};

interface Song {
  name: string;
}

const user = func<Song>({ name: "Dario" });
//user.toUpperCase();
