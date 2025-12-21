"use client";

interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  strokeWidth?: number;
}

const sizeMap = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
};

export default function Icon({ name, size = 'md', className = '', strokeWidth }: IconProps) {
  return (
    <svg 
      className={`${sizeMap[size]} ${className} inline-block flex-shrink-0`}
      style={strokeWidth ? { strokeWidth } : undefined}
    >
      <use href={`/icons/icons.svg#icon-${name}`} />
    </svg>
  );
}

// Emoji replacement map for self-hosted icons
export const emojiToIcon: Record<string, string> = {
  '📚': 'book',
  '✅': 'check-circle',
  '👥': 'users',
  '❓': 'question',
  '💡': 'lightbulb',
  '🎧': 'headphones',
  '🎤': 'mic',
  '✏️': 'pen',
  '🎯': 'target',
  '📅': 'calendar',
  '🌍': 'globe',
  '🏆': 'award',
  '✨': 'sparkles',
  '💬': 'message',
  '❤️': 'heart',
  '⭐': 'star',
};
