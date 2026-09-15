import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as ChevronDown, c as Bath, i as Menu, l as ArrowRight, n as Search, o as Building2, r as Ruler, s as BedDouble, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-T-NSvTBg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_residence_default = "/assets/hero-residence-ClEtg8nG.jpg";
var willow_residence_default = "/assets/willow-residence-B3m6719e.jpg";
var aria_heights_default = "/assets/aria-heights-B8_P2beu.jpg";
var casa_verde_default = "/assets/casa-verde-BHeWxMjS.jpg";
var location_delhi_default = "/assets/location-delhi-BmjJZjBr.jpg";
var location_mumbai_default = "/assets/location-mumbai-TH5-dZd6.jpg";
var location_goa_default = "/assets/location-goa-DihHDyM_.jpg";
var closing_residence_default = "/assets/closing-residence-GeB0ckFo.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("group inline-flex min-h-12 items-center justify-center gap-3 border px-6 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent",
			accent: "border-accent bg-accent text-accent-foreground hover:border-primary hover:bg-primary",
			light: "border-hero-foreground bg-hero-foreground text-primary hover:border-accent hover:bg-accent hover:text-accent-foreground",
			outlineLight: "border-hero-border bg-transparent text-hero-foreground hover:border-hero-foreground hover:bg-hero-tint",
			outline: "border-border bg-transparent text-foreground hover:border-primary hover:bg-secondary",
			ghost: "border-transparent bg-transparent text-foreground hover:bg-secondary",
			text: "min-h-0 border-0 p-0 text-primary hover:text-accent"
		},
		size: {
			default: "min-h-12 px-6",
			sm: "min-h-9 px-3",
			lg: "min-h-14 px-8",
			icon: "size-10 min-h-0 px-0",
			"icon-sm": "size-8 min-h-0 px-0",
			"icon-lg": "size-12 min-h-0 px-0"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
Button.displayName = "Button";
var properties = [
	{
		name: "The Willow Residence",
		location: "New Delhi",
		type: "Villa",
		beds: 4,
		baths: 5,
		area: "4,200 sq.ft.",
		price: "₹4.8 Cr",
		image: willow_residence_default,
		lead: true
	},
	{
		name: "Aria Heights",
		location: "Mumbai",
		type: "Apartment",
		beds: 3,
		baths: 3,
		area: "2,180 sq.ft.",
		price: "₹2.6 Cr",
		image: aria_heights_default
	},
	{
		name: "Casa Verde",
		location: "Goa",
		type: "Villa",
		beds: 4,
		baths: 4,
		area: "3,600 sq.ft.",
		price: "₹3.9 Cr",
		image: casa_verde_default
	}
];
var locations = [
	{
		name: "Delhi",
		count: "42 properties",
		copy: "Leafy enclaves, enduring architecture and the centre of it all.",
		image: location_delhi_default
	},
	{
		name: "Mumbai",
		count: "36 properties",
		copy: "Elevated city living, shaped by sea, light and possibility.",
		image: location_mumbai_default
	},
	{
		name: "Goa",
		count: "28 properties",
		copy: "A slower rhythm, tropical modernism and room to breathe.",
		image: location_goa_default
	}
];
function useReveals() {
	(0, import_react.useEffect)(() => {
		const elements = document.querySelectorAll(".reveal");
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			elements.forEach((element) => element.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .14 });
		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	}, []);
}
function scrollTo(id) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
		"aria-hidden": "true",
		className: "arrow-move size-4"
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const update = () => setScrolled(window.scrollY > 40);
		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const nav = [
		"Properties",
		"Buy",
		"Rent",
		"Sell",
		"About",
		"Insights",
		"Contact"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-500", scrolled || open ? "border-border bg-background text-foreground" : "border-transparent bg-transparent text-hero-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("page-shell flex items-center justify-between transition-all duration-500", scrolled ? "h-18" : "h-24"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					"aria-label": "Avera Estates home",
					className: "font-display text-3xl",
					children: ["Avera", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary navigation",
					className: "hidden items-center gap-7 lg:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "nav-link text-[0.69rem] font-medium uppercase tracking-[0.12em]",
						href: `#${item.toLowerCase()}`,
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: scrolled ? "accent" : "outlineLight",
					className: "hidden lg:inline-flex",
					onClick: () => scrollTo("contact"),
					children: "Book a Consultation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen(!open),
					className: "flex size-12 items-center justify-center border border-current lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute inset-x-0 top-full z-40 h-[calc(100dvh-72px)] bg-background px-6 text-foreground transition-all duration-500 lg:hidden", open ? "visible opacity-100" : "invisible opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex h-full flex-col justify-center gap-5",
				"aria-label": "Mobile navigation",
				children: [nav.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${item.toLowerCase()}`,
					onClick: () => setOpen(false),
					className: "border-b border-border pb-4 font-display text-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mr-5 align-middle font-sans text-[0.65rem] text-muted-foreground",
						children: ["0", index + 1]
					}), item]
				}, item)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "accent",
					className: "mt-5 w-full",
					onClick: () => {
						setOpen(false);
						scrollTo("contact");
					},
					children: ["Book a Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
				})]
			})
		})]
	});
}
function SelectField({ label, children, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "relative block min-w-0 flex-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("eyebrow mb-2 block", dark ? "text-hero-foreground/70" : "text-muted-foreground"),
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: cn("h-9 w-full appearance-none bg-transparent pr-7 text-sm outline-none transition-colors focus:border-accent", dark ? "text-hero-foreground" : "text-foreground"),
				defaultValue: "",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				"aria-hidden": "true",
				className: "pointer-events-none absolute bottom-2.5 right-0 size-4"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[760px] overflow-hidden text-hero-foreground md:min-h-[840px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_residence_default,
				alt: "Contemporary residence with illuminated gardens at dusk",
				width: 1920,
				height: 1200,
				fetchPriority: "high",
				className: "hero-image absolute inset-0 h-full w-full object-cover object-[62%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0.02_170/0.78)_0%,oklch(0.12_0.02_170/0.38)_48%,transparent_78%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell relative flex min-h-[760px] flex-col justify-end pb-8 pt-32 md:min-h-[840px] md:pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-auto mt-auto max-w-3xl pb-10 md:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow hero-enter hero-enter-1 mb-6 text-hero-foreground/75",
							children: "Curated Real Estate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-title hero-enter hero-enter-2 max-w-3xl text-6xl sm:text-7xl md:text-[6.3rem]",
							children: ["Find a Place Worth ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Calling Home." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-enter hero-enter-3 mt-7 max-w-lg text-base leading-7 text-hero-foreground/85 md:text-lg",
							children: "Exceptional homes, thoughtfully selected for the way you want to live."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-enter hero-enter-4 mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "light",
								onClick: () => scrollTo("properties"),
								children: ["Explore Properties ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outlineLight",
								onClick: () => scrollTo("contact"),
								children: "Book a Consultation"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (event) => {
						event.preventDefault();
						scrollTo("properties");
					},
					className: "hero-enter hero-enter-5 grid gap-5 border border-hero-border bg-primary/75 p-5 backdrop-blur-sm md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
							dark: true,
							label: "Location",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Any location"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Delhi" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mumbai" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Goa" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
							dark: true,
							label: "Property type",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "All properties"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Apartment" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Villa" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "House" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
							dark: true,
							label: "Price range",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Any price"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹1–3 Cr" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹3–5 Cr" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹5 Cr+" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "accent",
							type: "submit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), " Search"]
						})
					]
				})]
			})
		]
	});
}
function SearchSection() {
	const [mode, setMode] = (0, import_react.useState)("Buy");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "buy",
		className: "border-b border-border bg-card py-14 md:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3 text-accent",
					children: "Begin your search"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl md:text-5xl",
					children: "What are you looking for?"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex border-b border-border",
					role: "tablist",
					"aria-label": "Transaction type",
					children: ["Buy", "Rent"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": mode === item,
						onClick: () => setMode(item),
						className: cn("min-h-12 px-8 text-sm transition-colors", mode === item ? "border-b-2 border-accent text-primary" : "text-muted-foreground"),
						children: item
					}, item))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (event) => {
					event.preventDefault();
					scrollTo("properties");
				},
				className: "grid gap-x-7 gap-y-6 border-y border-border py-7 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_.7fr_auto] lg:items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
						label: "Location",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a city"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Delhi" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mumbai" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Goa" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
						label: "Property type",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Any type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Apartment" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Villa" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "House" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Penthouse" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Commercial" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
						label: "Price range",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Any price"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹1–3 Cr" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹3–5 Cr" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹5 Cr+" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
						label: "Bedrooms",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Any"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2+" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "3+" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "4+" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "accent",
						type: "submit",
						children: ["Find Properties ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					})
				]
			})]
		})
	});
}
function PropertyTile({ property }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "property-tile group border-b border-border pb-6 transition-colors duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden", property.lead ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/3]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: property.image,
				alt: `${property.name}, ${property.location}`,
				width: property.lead ? 1408 : 1200,
				height: property.lead ? 1600 : 912,
				loading: "lazy",
				className: "image-zoom h-full w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "property-copy mt-5 transition-transform duration-500",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2 text-muted-foreground",
					children: property.location
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl",
					children: property.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [property.beds, " Beds"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [property.baths, " Baths"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: property.area }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "ml-auto text-base font-semibold text-foreground",
						children: property.price
					})
				]
			})]
		})]
	});
}
function FeaturedProperties() {
	const leadProperty = properties[0];
	if (!leadProperty) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "properties",
		className: "py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal mb-14 grid gap-6 md:grid-cols-2 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-accent",
					children: "Selected residences"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-title text-5xl md:text-7xl",
					children: ["Properties Worth ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Discovering" })]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:justify-self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md leading-7 text-muted-foreground",
						children: "A considered collection of residences selected for location, architecture and lifestyle."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "text",
						className: "mt-6",
						children: ["View All Properties ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-8 md:grid-cols-[1.22fr_.78fr] md:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyTile, { property: leadProperty })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-12 md:pt-24",
					children: properties.slice(1).map((property) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reveal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyTile, { property })
					}, property.name))
				})]
			})]
		})
	});
}
function Principles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-primary py-24 text-primary-foreground md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal lg:sticky lg:top-32 lg:self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-5 text-secondary",
					children: "Why Avera"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-title max-w-xl text-5xl md:text-7xl",
					children: [
						"Real Estate, With a More ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Considered" }),
						" Approach."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "reveal",
				children: [
					["Curated Properties", "We look beyond listings to find homes with lasting architectural and lifestyle value."],
					["Local Expertise", "On-the-ground knowledge of neighbourhoods, markets and the nuances that matter."],
					["Transparent Guidance", "Clear advice, thoughtful due diligence and no pressure at any stage."],
					["Long-Term Relationships", "A trusted partner for this move, the next one and everything in between."]
				].map(([title, copy], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "group grid gap-3 border-t border-hero-border py-8 sm:grid-cols-[3rem_1fr] sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow pt-2 text-secondary",
						children: ["0", index + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg leading-7 text-primary-foreground/70",
						children: copy
					})] })]
				}, title))
			})]
		})
	});
}
function Locations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-card py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal mb-14 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-accent",
					children: "Places we know"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-title text-5xl md:text-7xl",
					children: ["Live Where Life Feels ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Different." })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: locations.map((location, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cn("location-tile group relative overflow-hidden", index === 1 ? "lg:mt-16" : index === 2 ? "lg:mt-32" : ""),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: location.image,
								alt: `Luxury property setting in ${location.name}`,
								width: 1408,
								height: 912,
								loading: "lazy",
								className: "image-zoom h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-7 text-hero-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-2 text-hero-foreground/70",
									children: location.count
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-5xl transition-transform duration-300 group-hover:-translate-y-1",
									children: location.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm leading-6 text-hero-foreground/75",
								children: location.copy
							})]
						})
					]
				}, location.name))
			})]
		})
	});
}
function PropertyStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: willow_residence_default,
					alt: "Sunlit courtyard of The Willow Residence",
					width: 1408,
					height: 1600,
					loading: "lazy",
					className: "h-[34rem] w-full object-cover md:h-[46rem]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-accent",
						children: "The Willow Residence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-title text-5xl md:text-6xl",
						children: [
							"Architecture designed around ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "light, space" }),
							" and everyday living."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-lg leading-7 text-muted-foreground",
						children: "A quiet urban retreat in New Delhi, where warm natural materials meet generous gardens and beautifully framed daylight."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "my-9 grid grid-cols-2 border-y border-border py-7",
						children: [
							[
								BedDouble,
								"4",
								"Bedrooms"
							],
							[
								Bath,
								"5",
								"Bathrooms"
							],
							[
								Ruler,
								"4,200",
								"Sq.ft."
							],
							[
								Building2,
								"Private",
								"Garden"
							]
						].map(([Icon, value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5 text-accent",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-lg font-semibold",
								children: value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "eyebrow mt-1 text-muted-foreground",
								children: label
							})] })]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: ["View Property ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})] })
				]
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-accent",
					children: "How we work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-title text-5xl md:text-6xl",
					children: [
						"From first conversation",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "front door." })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm leading-7 text-muted-foreground",
					children: "A clear, personal process built around your priorities—not ours."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid gap-0 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "timeline-progress absolute left-0 right-0 top-[1.15rem] hidden h-px bg-primary md:block" }), [
					["Discover", "Understand your requirements and lifestyle."],
					["Curate", "Shortlist properties that genuinely fit."],
					["Guide", "Support you from viewing to closing."]
				].map(([title, copy], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative border-l border-primary pb-10 pl-8 last:pb-0 md:border-0 md:pb-0 md:pl-0 md:pr-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative z-10 inline-flex size-9 items-center justify-center bg-secondary text-xs font-semibold",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-4xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs leading-6 text-muted-foreground",
							children: copy
						})
					]
				}, title))]
			})]
		})
	});
}
function CountUp({ value, suffix }) {
	const [count, setCount] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				setCount(value);
				observer.disconnect();
				return;
			}
			const start = performance.now();
			const tick = (now) => {
				const progress = Math.min((now - start) / 1100, 1);
				setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
				if (progress < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
			observer.disconnect();
		}, { threshold: .5 });
		observer.observe(node);
		return () => observer.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [count, suffix]
	});
}
function StatsAndQuote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-card py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-shell grid grid-cols-2 gap-y-10 md:grid-cols-4",
			children: [
				[
					12,
					"+",
					"Years of Experience"
				],
				[
					480,
					"+",
					"Properties Transacted"
				],
				[
					18,
					"",
					"Prime Locations"
				],
				[
					96,
					"%",
					"Client Referrals"
				]
			].map(([value, suffix, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l border-border pl-5 md:pl-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-display text-5xl font-normal text-primary md:text-6xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						value,
						suffix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: label
				})]
			}, label))
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-card py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell reveal grid gap-10 md:grid-cols-[.25fr_1fr] md:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-8xl leading-none text-accent",
				children: "“"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "display-title max-w-5xl text-4xl md:text-6xl",
				children: ["They understood exactly what we were looking for and never pushed us toward a property that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "wasn't right." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-10 border-t border-border pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-sm",
					children: "Ananya & Rohan Mehta"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-4 text-sm text-muted-foreground",
					children: "Villa purchase · New Delhi"
				})]
			})] })]
		})
	})] });
}
function Insights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "insights",
		className: "py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal mb-12 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-accent",
					children: "Perspective"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-title text-5xl md:text-7xl",
					children: [
						"Insights for ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "considered" }),
						" decisions."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "text",
					className: "hidden md:inline-flex",
					children: ["View all insights ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: [
				[
					"Neighbourhoods",
					"How to Choose the Right Neighbourhood",
					"6 min read",
					location_delhi_default
				],
				[
					"Investment",
					"Understanding Property Value Beyond the Price",
					"8 min read",
					location_mumbai_default
				],
				[
					"Buying Guide",
					"5 Things to Look for Before Buying a Home",
					"5 min read",
					casa_verde_default
				]
			].map(([category, title, time, image]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "insight-row group reveal grid items-center gap-5 border-t border-border py-6 transition-colors md:grid-cols-[13rem_1fr_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/10] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image,
							alt: "",
							width: 1408,
							height: 912,
							loading: "lazy",
							className: "image-zoom h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow mb-3 text-accent",
						children: [
							category,
							" · ",
							time
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl md:text-4xl",
						children: title
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
				]
			}, title)) })]
		})
	});
}
function Closing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative isolate min-h-[600px] overflow-hidden text-hero-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: closing_residence_default,
				alt: "Contemporary courtyard residence illuminated at dusk",
				width: 1920,
				height: 1008,
				loading: "lazy",
				className: "absolute inset-0 -z-20 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-primary/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-shell flex min-h-[600px] items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6 text-secondary",
							children: "Begin a conversation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-title text-6xl md:text-8xl",
							children: ["Your Next Chapter Starts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Here." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-lg text-lg leading-7 text-hero-foreground/80",
							children: "Tell us what you're looking for. We'll help you find the right place."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "light",
								children: ["Book a Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outlineLight",
								onClick: () => scrollTo("properties"),
								children: "Explore Properties"
							})]
						})
					]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-footer py-16 text-primary-foreground md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "font-display text-4xl",
						children: ["Avera", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-6 text-footer-muted",
						children: "Considered homes and trusted advice in India's most desirable locations."
					})] }),
					[[
						"Explore",
						"Properties",
						"Buy",
						"Rent",
						"Sell"
					], [
						"Company",
						"About",
						"Insights",
						"Contact"
					]].map(([heading, ...links]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow mb-5 text-secondary",
						children: heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm text-footer-muted",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "transition-colors hover:text-primary-foreground",
							href: `#${link.toLowerCase()}`,
							children: link
						}) }, link))
					})] }, heading)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow mb-5 text-secondary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "space-y-3 text-sm not-italic text-footer-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "+91 11 4102 8800" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "hello@averaestates.in" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Defence Colony, New Delhi" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex gap-5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Instagram"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "LinkedIn"
							})]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col justify-between gap-4 border-t border-hero-border pt-6 text-xs text-footer-muted md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Avera Estates. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Privacy · Terms" })]
			})]
		})
	});
}
function HomePage() {
	useReveals();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProperties, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Principles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locations, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyStory, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsAndQuote, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { HomePage as component };
