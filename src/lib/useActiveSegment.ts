// src/lib/useActiveSegment.ts
import { page } from '$app/stores';
import { derived, type Readable } from 'svelte/store';

/**
 * A hook to check if a specific path segment is active.
 * @param segmentToCheck - The segment to check against the current path.
 * @returns A derived store that returns true if the segment is active.
 */
export function useActiveSegment(segmentToCheck: string): Readable<boolean> {
	return derived(page, ($page) => {
		const currentPath = $page.url.pathname;
		const segments = currentPath.split('/').filter(Boolean); // Split and filter empty segments
		const lastSegment = segments[segments.length - 1] || ''; // Get the last segment
		return lastSegment === segmentToCheck; // Check if it matches
	});
}
