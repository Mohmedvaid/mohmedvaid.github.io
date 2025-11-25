import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;

export const SnakeGame = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Position>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState<number | null>(3);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  const resetGame = useCallback(() => {
    setSnake([
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ]);
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
    setScore(0);
    setCountdown(3);
    generateFood();
  }, [generateFood]);

  useEffect(() => {
    if (!isOpen) return;

    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCountdown(null);
    }
  }, [countdown, isOpen]);

  const handleDirectionChange = useCallback((newDirection: Position) => {
    setDirection((prevDirection) => {
      if (newDirection.x !== 0 && prevDirection.x === 0) return newDirection;
      if (newDirection.y !== 0 && prevDirection.y === 0) return newDirection;
      return prevDirection;
    });
  }, []);

  useEffect(() => {
    if (!isOpen || gameOver || countdown !== null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          handleDirectionChange({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          handleDirectionChange({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          handleDirectionChange({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          handleDirectionChange({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, gameOver, countdown, handleDirectionChange]);

  useEffect(() => {
    if (!isOpen || gameOver || countdown !== null) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          generateFood();
          return newSnake;
        }

        newSnake.pop();
        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [direction, food, isOpen, gameOver, countdown, generateFood]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                Snake Game
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Score: {score}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div
            className="relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border-4 border-purple-500/20"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
            }}
            onTouchStart={(e) => {
              if (gameOver || countdown !== null) return;
              const touch = e.touches[0];
              touchStartRef.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(e) => {
              if (gameOver || countdown !== null || !touchStartRef.current) return;
              const touch = e.changedTouches[0];
              const deltaX = touch.clientX - touchStartRef.current.x;
              const deltaY = touch.clientY - touchStartRef.current.y;
              const absDeltaX = Math.abs(deltaX);
              const absDeltaY = Math.abs(deltaY);

              if (absDeltaX > 20 || absDeltaY > 20) {
                if (absDeltaX > absDeltaY) {
                  handleDirectionChange(deltaX > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 });
                } else {
                  handleDirectionChange(deltaY > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 });
                }
              }
              touchStartRef.current = null;
            }}
          >
            {/* Food */}
            <div
              className="absolute bg-red-500 rounded-sm animate-pulse"
              style={{
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                left: food.x * CELL_SIZE + 1,
                top: food.y * CELL_SIZE + 1,
              }}
            />

            {/* Snake */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className="absolute bg-gradient-to-br from-indigo-500 to-purple-600 rounded-sm"
                style={{
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  left: segment.x * CELL_SIZE + 1,
                  top: segment.y * CELL_SIZE + 1,
                  opacity: 1 - index * 0.05,
                }}
              />
            ))}

            {/* Countdown Overlay */}
            {countdown !== null && countdown > 0 && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <motion.p
                  key={countdown}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  className="text-white text-8xl font-bold"
                >
                  {countdown}
                </motion.p>
              </div>
            )}

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
                <p className="text-white text-3xl font-bold mb-4">Game Over!</p>
                <p className="text-white text-xl mb-4">Score: {score}</p>
                <Button onClick={resetGame} className="bg-purple-600 hover:bg-purple-700">
                  Play Again
                </Button>
              </div>
            )}
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
            <span className="hidden md:inline">Use arrow keys to move</span>
            <span className="md:hidden">Swipe or use buttons to move</span>
          </p>

          {/* Mobile On-Screen Controls */}
          <div className="md:hidden mt-4 grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
            <div />
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-lg"
              onTouchStart={(e) => {
                e.preventDefault();
                if (!gameOver && countdown === null) handleDirectionChange({ x: 0, y: -1 });
              }}
              onClick={() => {
                if (!gameOver && countdown === null) handleDirectionChange({ x: 0, y: -1 });
              }}
            >
              <ChevronUp className="w-6 h-6" />
            </Button>
            <div />
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-lg"
              onTouchStart={(e) => {
                e.preventDefault();
                if (!gameOver && countdown === null) handleDirectionChange({ x: -1, y: 0 });
              }}
              onClick={() => {
                if (!gameOver && countdown === null) handleDirectionChange({ x: -1, y: 0 });
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-lg"
              onTouchStart={(e) => {
                e.preventDefault();
                if (!gameOver && countdown === null) handleDirectionChange({ x: 0, y: 1 });
              }}
              onClick={() => {
                if (!gameOver && countdown === null) handleDirectionChange({ x: 0, y: 1 });
              }}
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-lg"
              onTouchStart={(e) => {
                e.preventDefault();
                if (!gameOver && countdown === null) handleDirectionChange({ x: 1, y: 0 });
              }}
              onClick={() => {
                if (!gameOver && countdown === null) handleDirectionChange({ x: 1, y: 0 });
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
