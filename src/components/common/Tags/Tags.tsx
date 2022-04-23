type TagsProps = {
  tags: string[];
};

export default function Tags(props: TagsProps) {
  return (
    <div className="flex flex-wrap">
      {props.tags.map((tag) => (
        <TagItem title={tag} />
      ))}
    </div>
  );
}

function TagItem({ title }: { title: string} ) {
  return (
    <span className="text-xs bg-cyan-500 text-white px-1 py-0.5 mr-1 mt-1 rounded-sm">
      {title}
    </span>
  );
}
