import "./App.css";
import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const citations = [
	{
		texte:
			"La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
		auteur: "Albert Einstein",
	},

	{
		texte: "Le meilleur moyen de prédire l’avenir est de le créer.",
		auteur: "Peter Drucker",
	},

	{
		texte:
			"On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.",
		auteur: "Antoine de Saint-Exupéry",
	},
	{
		texte:
			"Ceux qui n’apprennent pas de leurs erreurs passées sont condamnés à les répéter.",
		auteur: "Auteur inconnu",
	},

	{
		texte:
			"Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.",
		auteur: "Winston Churchill",
	},

	{
		texte: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.",
		auteur: "Mark Twain",
	},

	{
		texte: "Fais de ta vie un rêve, et d’un rêve, une réalité.",
		auteur: "Antoine de Saint-Exupéry",
	},

	{
		texte:
			"On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.",
		auteur: "Antoine de Saint-Exupéry",
	},
];

function GeneratorCitation() {
	const [cite, setCite] = useState(citations[0]);
	const getCite = () => {
		const randomIndex = Math.floor(Math.random() * citations.length);
		setCite(citations[randomIndex]);
	};
	return (
		<div className="min-h-screen flex items-center justify-center bg-[#2d2d2d] px-4">
			<div className="text-white text-center max-w-xl w-full">
				<div className="flex justify-start mb-4">
					<div className="bg-orange-500 w-14 h-14 flex items-center justify-center rounded-full">
						<FaQuoteLeft className="text-2xl text-[#2d2d2d]" />
					</div>
				</div>

				<p className="text-xl md:text-2xl italic leading-loose mb-6">
					{cite.texte}
				</p>
				<div className="flex justify-between items-center mt-6">
					<button
						className="bg-orange-500 text-[#2d2d2d] font-bold uppercase px-4 py-2 rounded"
						onClick={getCite}
					>
						{cite.auteur}
					</button>

					<div className="bg-orange-500 w-14 h-14 flex items-center justify-center rounded-full">
						<FaQuoteRight className="text-2xl text-[#2d2d2d]" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default GeneratorCitation;
