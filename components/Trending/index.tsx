import { AiOutlineMail } from "react-icons/ai";
import { CgMore } from "react-icons/cg";


const TrendItem = ({
  category,
  tag,
  posts,
}: {
  category: string;
  tag: string;
  posts: string;
}) => (
  <div className="flex justify-between items-start">
    <div>
      <p className="text-gray-400 text-xs">{category}</p>
      <h1 className="text-sm font-medium">{tag}</h1>
      <p className="text-gray-400 text-xs">{posts}</p>
    </div>
    <CgMore className="text-gray-500 cursor-pointer mt-1" />
  </div>
);


interface RightCardProps {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName?: string | null;
    profileImageURL?: string | null;
  };
}

const RightCard: React.FC<RightCardProps> = ({ user }) => {
  return (
    <div className="text-white">

      {/* 🔹 USER CARD */}
     <div className="mt-6 p-4 mx-6 border border-gray-700 rounded-xl flex items-center gap-3">
  {user.profileImageURL ? (
    <img
      src={user.profileImageURL}
      alt="profile"
      className="w-10 h-10 rounded-full object-cover"
    />
  ) : (
    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">
      {user.firstName?.[0]}
    </div>
  )}

  <div>
    <p className="text-sm text-gray-400">Logged in as</p>
    <p className="font-semibold">
      {user.firstName} {user.lastName}
    </p>
  </div>
</div>

      {/* 🔹 TRENDING CARD */}
      <div className="mt-6 p-4 mx-6 border border-gray-700 rounded-xl">
        <h1 className="text-xl font-bold mb-4">What's happening</h1>

        <div className="space-y-4">
          <TrendItem
            category="Entertainment · Trending"
            tag="#Alpha"
            posts="1475 posts"
          />
          <TrendItem
            category="Politics · Trending"
            tag="#Narendra Modi"
            posts="895 posts"
          />
          <TrendItem
            category="Sports · Trending"
            tag="#Virat Kohli"
            posts="165 posts"
          />
          <TrendItem
            category="Person · Trending"
            tag="#Mohit Choubey"
            posts="75 posts"
          />
          <TrendItem
            category="Topic · Trending"
            tag="#Jeffrey Epstein"
            posts="69 posts"
          />
        </div>
      </div>

      {/* 🔹 FLOATING MAIL */}
      <div className="fixed bottom-6 right-6">
        <button
          className="w-12 h-12 rounded-xl bg-black border border-gray-700
          flex items-center justify-center shadow-lg
          hover:bg-gray-800 transition"
        >
          <AiOutlineMail className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default RightCard;
