"use client";
import { useEffect, useRef } from "react";

export default function GalaxyBackground({ dark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Stars ─────────────────────────────────────────
    const STAR_COLORS = [
      "255,255,255",
      "167,139,250",
      "96,165,250",
      "244,114,182",
      "52,211,153",
    ];

    const stars = Array.from({ length: 280 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.4 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    // ── Nebulas ────────────────────────────────────────
    const NEBULA_COLORS = [
      "139,92,246",
      "59,130,246",
      "236,72,153",
      "16,185,129",
      "99,102,241",
    ];

    const nebulas = Array.from({ length: 6 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 220 + 120,
      color: NEBULA_COLORS[Math.floor(Math.random() * NEBULA_COLORS.length)],
      alpha: Math.random() * 0.07 + 0.02,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.12,
    }));

    // ── Shooting Stars ─────────────────────────────────
    const shootingStars = [];
    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 5,
        alpha: 1,
        angle: Math.PI / 5,
      });
    };
    const shootingInterval = setInterval(spawnShootingStar, 2200);

    // ── Mouse Parallax ─────────────────────────────────
    const handleMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    // ── Draw Loop ──────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      const bg = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      if (dark) {
        bg.addColorStop(0, "#0f0a1e");
        bg.addColorStop(0.5, "#07051a");
        bg.addColorStop(1, "#020108");
      } else {
        bg.addColorStop(0, "#e0e7ff");
        bg.addColorStop(0.5, "#ede9fe");
        bg.addColorStop(1, "#f5f3ff");
      }
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebulas
      nebulas.forEach((n) => {
        n.x += n.speedX + mouseX * 0.3;
        n.y += n.speedY + mouseY * 0.3;
        if (n.x < -n.r) n.x = canvas.width + n.r;
        if (n.x > canvas.width + n.r) n.x = -n.r;
        if (n.y < -n.r) n.y = canvas.height + n.r;
        if (n.y > canvas.height + n.r) n.y = -n.r;

        const nebulaAlpha = dark ? n.alpha : n.alpha * 0.4;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, `rgba(${n.color},${nebulaAlpha})`);
        grad.addColorStop(1, `rgba(${n.color},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Stars
      stars.forEach((s) => {
        s.y += s.speed;
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 1 || s.alpha <= 0.1) s.twinkleDir *= -1;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }

        const px = s.x + mouseX * s.r * 3;
        const py = s.y + mouseY * s.r * 3;
        const starAlpha = dark ? s.alpha : s.alpha * 0.6;

        // Glow
        const glow = ctx.createRadialGradient(px, py, 0, px, py, s.r * 4);
        glow.addColorStop(0, `rgba(${s.color},${starAlpha})`);
        glow.addColorStop(1, `rgba(${s.color},0)`);
        ctx.beginPath();
        ctx.arc(px, py, s.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${starAlpha})`;
        ctx.fill();
      });

      // Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.018;

        if (s.alpha <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        grad.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
        grad.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(shootingInterval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}