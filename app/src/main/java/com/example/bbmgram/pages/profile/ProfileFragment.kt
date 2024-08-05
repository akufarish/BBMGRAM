package com.example.bbmgram.pages.profile

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.content.ContextCompat
import com.example.bbmgram.R
import com.example.bbmgram.adapters.ProfilePageAdapter
import com.example.bbmgram.databinding.FragmentProfileBinding
import com.google.android.material.tabs.TabLayoutMediator

class ProfileFragment : Fragment() {

    private lateinit var _binding: FragmentProfileBinding
    private val binding get() = _binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentProfileBinding.inflate(layoutInflater, container, false)
        return binding.root
    }

    override fun onStart() {
        super.onStart()

        val profileAdapter = ProfilePageAdapter(childFragmentManager, lifecycle)

        binding.profileViewPager.apply {
            adapter = profileAdapter
        }

        TabLayoutMediator(
            binding.profileTabLayout,
            binding.profileViewPager
        ) {tab, position -> when(position) {
            0 -> {
                tab.icon = ContextCompat.getDrawable(requireContext(), R.drawable.ic_grid)
            }
            1 -> {
                tab.icon = ContextCompat.getDrawable(requireContext(), R.drawable.ic_reels)
            }
            2 -> {
                tab.icon = ContextCompat.getDrawable(requireContext(), R.drawable.ic_tag)
            }
        } }.attach()
    }
}